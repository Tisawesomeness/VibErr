import axios from "axios";
import fs from 'fs/promises';
import util from 'node:util';

export type VibeFunc = <T>(func: () => T) => Promise<T>;

/**
 * @module
 * @description
 * Eliminate errors with the help of automatic vibe coding.
 */
export function VibErr(apiKey: string): VibeFunc {
  return new Vibe(apiKey).vibErr;
}

class Vibe {

  readonly apiKey!: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Eliminates errors with the help of automatic vibe coding.
   * 
   * Executes a given function and returns its result. If the function throws an error,
   * it retrieves the source code where the error occurred and sends it to the OpenAI API
   * for analysis. The API is prompted to provide what the code's output should have been
   * instead of the error. The function then evaluates this output and returns it.
   * 
   * @template T - The return type of the function to execute.
   * @param {() => T} func - The function to execute.
   * @returns {Promise<T>} A promise that resolves to the function's result or the corrected output from the OpenAI API.
   * @throws {Error} If an OpenAI API error occurs.
   */
  public async vibErr<T>(func: () => T): Promise<T> {
    try {
      return func();
    } catch (e) {
      const callingSource = await getCallingSource();

      const prompt = `The following error occurred in the code:\n` +
        `${codeblock(e)}\n` +
        `The source code at the time of the error was inside \`vibeErr\` function:\n` +
        `${codeblock(callingSource, 'typescript')}\n` +
        `Please tell me what the code should have output instead of the error. Put the output in a code block, in a format that I can eval.`;
      const response = (await this.chat(prompt)).data.choices[0].message.content;

      return await this.vibErr(() => {
        const output = getCodeInLastCodeblock(response);
        return eval(output);
      });
    }
  }

  private async chat(prompt: string) {
    return await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

}

async function getCallingSource() {
  const stack = util.getCallSites(200, { sourceMap: true })
  const callSite = getFirstNonLocalCallSite(stack);
  return fs.readFile(callSite, 'utf8');
}

function getFirstNonLocalCallSite(stack: util.CallSiteObject[]): string {
  for (const frame of stack) {
    const fileName = frame.scriptName;
    if (fileName !== __filename) {
      return fileName;
    }
  }
  return __filename;
}

function codeblock(code: unknown, language: string = '') {
  return `\`\`\`${language}\n${code}\n\`\`\``;
}

function getCodeInLastCodeblock(markdown: string) {
  const codeBlockRegex = /```(?:\w*\n)?([\s\S]*?)```/g;
  const matches = markdown.match(codeBlockRegex);
  if (matches) {
    const lastCodeBlock = matches[matches.length - 1];
    return lastCodeBlock.replace(/```(?:\w*\n)?|```/g, '').trim();
  }
  throw new Error('No code block found in ' + markdown);
}

export default VibErr;
