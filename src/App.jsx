import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [uniqueWords, setUniqueWords] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  useEffect(() => {
    // Calculate unique words
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWordsCount = new Set(words).size;
    setUniqueWords(uniqueWordsCount);

    // Calculate character count excluding spaces and punctuation
    const charCountExcludingSpacesAndPunctuation = (
      text.match(/[a-zA-Z0-9]/g) || []
    ).length;
    setCharCount(charCountExcludingSpacesAndPunctuation);

    // Highlight replaced words
    let highlighted = text;
    if (searchString) {
      const regex = new RegExp(`(${searchString})`, "gi");
      highlighted = text.replace(regex, `<mark class="bg-slate-300">$1</mark>`);
    }
    setHighlightedText(highlighted);
  }, [text, searchString]);

  const handleReplaceAll = () => {
    if (!searchString) return;
    const replacedText = text.split(searchString).join(replaceString);
    setText(replacedText);
  };

  return (
    <div className="bg-slate-800">
      <div className="container text-slate-200 min-h-dvh mx-auto p-4 max-w-2xl flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Real-Time Text Analyzer
        </h1>
        <textarea
          className="w-full shadow-lg h-40 p-3  rounded-lg outline-none bg-slate-700"
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="my-4 text-gray-300">
          <p className="">
            Unique Words: <span className="font-bold">{uniqueWords}</span>
          </p>
          <p className="">
            Characters (excluding spaces and punctuation):{" "}
            <span className="font-bold">{charCount}</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4 ">
          <input
            className="w-full p-2 md:w-[50%]  rounded-lg outline-none bg-slate-700"
            type="text"
            placeholder="Search string..."
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <input
            className="w-full p-2  md:w-[50%] bg-slate-700 rounded-lg outline-none"
            type="text"
            placeholder="Replace with..."
            value={replaceString}
            onChange={(e) => setReplaceString(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4 self-center">
          <button
            className="py-2 px-4 max-w-[400px]  bg-slate-950 text-white rounded-lg hover:bg-slate-900 outline-none"
            onClick={handleReplaceAll}
          >
            Replace All
          </button>
          <button
            style={
              text.length === 0 ? { opacity: "0.5", pointerEvents: "none" } : {}
            }
            className="py-2 px-4 max-w-[400px] self-center bg-slate-950 text-white rounded-lg hover:bg-slate-900 outline-none"
            onClick={() => {
              setText("");
              setReplaceString("");
              setSearchString("");
            }}
          >
            Clear
          </button>
        </div>
        {text && (
          <div
            className="shadow-lg rounded-lg p-4 bg-slate-900 whitespace-pre-wrap mt-4"
            dangerouslySetInnerHTML={{ __html: highlightedText }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default App;
