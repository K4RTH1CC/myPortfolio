import { useState, useEffect } from "react";

function TypingAnimation({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const word = words[currentWordIndex];

      if (!isDeleting) {
        setCurrentWord(word.slice(0, currentWord.length + 1));
        if (currentWord === word) {
          setIsDeleting(true);
        }
      } else {
        setCurrentWord(currentWord.slice(0, currentWord.length - 1));
        if (currentWord === "") {
          setIsDeleting(false);
          setShowCursor(true);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, 75);

    return () => clearInterval(intervalId);
  }, [currentWordIndex, currentWord, words, isDeleting]);

  return (
    <div>
      <span className="text-6xl ml-6 mt-12 font-bebas text-gray-700">
        <u>{currentWord}</u>
      </span>
      {showCursor && <span className="cursor text-6xl text-gray-700">|</span>}
    </div>
  );
}
export default TypingAnimation;
