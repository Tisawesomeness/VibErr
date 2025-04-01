import React, { useEffect } from 'react';
import { Code2, Cpu, Sparkles, Terminal, Github, EyeOff } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-12 h-12 text-blue-500" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              VibErr
            </h1>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Eliminate errors with automated Vibe Coding
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mb-12">
            Never see an error in production again!<br />
            VibErr uses the power of AI to keep your app running smoothly.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Tisawesomeness/VibErr" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Get Started
              </button>
            </a>
            <a href="https://github.com/Tisawesomeness/VibErr" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold flex items-center gap-2">
                <Github className="w-5 h-5" />
                View on GitHub
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          Powerful Features for 100% SLA
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code2 className="w-8 h-8 text-blue-500" />}
            title="Easy to Use"
            description="Simply wrap your code in `vibErr(...)`, and that's it! Enjoy seamless coding without errors."
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8 text-purple-500" />}
            title="Smart Refactoring"
            description="VibErr combines the robustness of JavaScript `eval()` with the reliability of generative AI."
          />
          <FeatureCard
            icon={<EyeOff className="w-8 h-8 text-green-500" />}
            title="Peace of Mind"
            description="With VibErr's error silencing, you can focus on what matters."
          />
        </div>
      </div>

      {/* Code Example Section */}
      <div className="container mx-auto px-4 py-20 border-t border-slate-700">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          Intelligent Code Assistance
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Vibe Debugging
            </h3>
            <p className="text-slate-300 mb-8">
              Humans make mistakes. Not every bug can be caught before shipping to production.
              VibErr is here to keep your app running anyway.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <Sparkles className="w-5 h-5 text-blue-500" />
                Context-aware completions
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Code2 className="w-5 h-5 text-purple-500" />
                Intelligent refactoring
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Terminal className="w-5 h-5 text-green-500" />
                Real-time incident response
              </li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="!bg-transparent">
              <code className="language-javascript">{`const username = await vibErr(() => {
  const founders = {
    microsoft: "Bill Gates",
    google: "Sundar Pichai",
    openai: "Sam Altman",
  }

  const founder = founders.openal;
  // ⚠️ Uncaught TypeError: founder is undefined
  return founder.toLowerCase().replaceAll(' ', '_');
});

// 🤖 Automatically corrected to "sam_altman"
console.log(username);`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="container mx-auto px-4 py-20 border-t border-slate-700">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-slate-300">
            Join thousands of developers who are already using VibErr
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400"
            name="John Smith"
            role="Senior Developer"
            quote="VibErr is a game-changer for any web development team. It's like having a QA without having to hire anyone."
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
            name="Sarah Johnson"
            role="Tech Lead"
            quote="VibErr's AI is so smart, it caught a critical bug that we missed in review. It's an absolute must-have for any production app."
          />
          <TestimonialCard
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
            name="Michael Chen"
            role="Full Stack Developer"
            quote="I was skeptical at first, but VibErr is actually really useful. It's like having a superpowered linter that fixes errors for you."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/Tisawesomeness/VibErr" className="hover:text-white transition-colors">Documentation</a>
            <a href="https://github.com/Tisawesomeness/VibErr" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://tis.codes/comunity" className="hover:text-white transition-colors">Community</a>
          </div>
          <p>A parody website by <a href="https://github.com/Tisawesomeness" className="hover:text-white transition-colors">Tisawesomeness</a></p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, role, quote }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-slate-400">{role}</p>
        </div>
      </div>
      <p className="text-slate-300 italic">"{quote}"</p>
    </div>
  );
}

export default App;