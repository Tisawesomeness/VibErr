import dotenv from 'dotenv';
import VibErr from '..';

dotenv.config();
const vibErr = VibErr(process.env.OPENAI_API_KEY!);

async function run() {
  const result = await vibErr(() => {

    const founders = {
      microsoft: "Bill Gates",
      google: "Sundar Pichai",
      openai: "Sam Altman",
    }
    const founder = founders.openal;
    return founder.toLowerCase().replaceAll(' ', '_');

  });
  console.log(result);
}

(async () => {
  await run();
})();
