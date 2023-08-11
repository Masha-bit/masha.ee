"use client"
import React, { useState, useEffect } from "react";

const TypingComponent = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = currentWordIndex;

      if (!isDeleting) {
        setCurrentWord(words[currentWordIndex].substring(0, currentWord.length + 1));

        // If the full word has been typed, start deleting it
        if (currentWord === words[currentWordIndex]) {
          setIsDeleting(true);
          setTypingDelay(200); // Delay before deleting starts
        }
      } else {
        setCurrentWord(words[currentWordIndex].substring(0, currentWord.length - 1));

        // If the word has been deleted, move to the next word
        if (currentWord === "") {
          setIsDeleting(false);
          setTypingDelay(200); // Delay before typing next word
          currentIndex = (currentWordIndex + 1) % words.length;
        }
      }

      setCurrentWordIndex(currentIndex);
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [currentWord, currentWordIndex, isDeleting, typingDelay, words]);

  return <div className='font-rust  text-[55px] h-[auto] w-[auto] transition-all ease-in-out '>{currentWord}</div>;
};

export default TypingComponent;






// return <div className='font-rust  text-[55px] h-[auto] w-[auto] transition-all ease-in-out '>
// {currentWord.slice(0, currentCharIndex)}
// </div>;