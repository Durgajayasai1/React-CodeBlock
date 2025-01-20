import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  twilight,
  nord,
  okaidia,
  dracula,
  tomorrow,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  IconCheck,
  IconCopy,
  IconChevronCompactDown,
} from "@tabler/icons-react";
import { useState } from "react";

function App() {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState("oneDark");
  const [activeTab, setActiveTab] = useState("Tab1");

  // Code snippets for tabs
  const codeSnippets = {
    Tab1: `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};`,
    Tab2: `
function Greeting({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default Greeting;`,
    Tab3: `
import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Current Count: {count}</p>
    </div>
  );
}

export default Counter;`,
  };

  const themes = {
    oneDark: oneDark,
    twilight: twilight,
    nord: nord,
    okaidia: okaidia,
    dracula: dracula,
    tomorrow: tomorrow,
    atomDark: atomDark,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="grid place-items-center min-h-screen px-4">
        <h1 className="text-3xl font-extrabold font-sora text-white text-center">
          Code Block
        </h1>
        <div className="max-w-3xl w-full bg-[#2e3440] rounded-lg shadow-lg overflow-hidden">
          {/* Tabs Header */}
          <div className="flex justify-between items-center px-4 py-3 text-white border-b border-gray-700">
            <div className="flex gap-4">
              {Object.keys(codeSnippets).map((tab) => (
                <button
                  key={tab}
                  className={`text-sm font-medium font-sora transition-colors ease-in-out duration-300 ${
                    activeTab === tab
                      ? "text-cyan-400"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {/* Dropdown Theme Selector */}
              <div className="relative">
                <select
                  className="bg-gray-700 text-white text-xs px-3 py-1.5 rounded-md pr-8 focus:outline-none appearance-none cursor-pointer"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  aria-label="Select code theme"
                >
                  {Object.keys(themes).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <IconChevronCompactDown size={16} className="text-gray-400" />
                </div>
              </div>

              {/* Copy Button */}
              <button
                className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                  copied
                    ? "text-green-400"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={handleCopy}
                aria-label="Copy code"
              >
                {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Code Block */}
          <SyntaxHighlighter
            language="jsx"
            style={themes[theme]}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              fontSize: "0.875rem",
              maxHeight: "400px",
              maxWidth: "100%",
              overflowX: "auto",
              overflowY: "auto",
            }}
            wrapLines={true}
            wrapLongLines={true}
            showLineNumbers={true}
          >
            {codeSnippets[activeTab]}
          </SyntaxHighlighter>
        </div>
        <p className="text-xs font-sora text-white text-center">
          Designed by Durgajayasai P
        </p>
      </div>
    </>
  );
}

export default App;
