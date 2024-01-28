"use client";

import {
  selectCurrentIndex,
  selectInputWords,
  selectLost,
  selectTargetWord,
  selectWon,
} from "@/lib/features/wordle/wordleSelectors";
import {
  deleteLetter,
  insertLetter,
  submitWord,
} from "@/lib/features/wordle/wordleSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WordleRow from "./WordleRow";
import { toast } from "react-toastify";

export default function WordleBoard() {
  const dispatch = useDispatch();
  const targetWord = useSelector(selectTargetWord);
  const inputWords = useSelector(selectInputWords);
  const currentIndex = useSelector(selectCurrentIndex);
  const won = useSelector(selectWon);
  const lost = useSelector(selectLost);

  useEffect(() => {
    // Handle Keyboard (virtual & physical) Input
    const handleKeyUpListener = (event: KeyboardEvent) => {
      if (won || lost) return; // No Keyboard events if game ended already

      if (event.key === "Enter") {
        const currentWord = inputWords[currentIndex];

        if (currentWord.length < 5) {
          toast.error("Word's too short") // Word too short
        } else {
          dispatch(submitWord()); // Submit current word
        }
      } else if (event.key === "Backspace") {
        dispatch(deleteLetter()); // Delete a letter
      } else {
        dispatch(insertLetter(event.key)); // Insert a letter
      }
    };

    window.addEventListener("keyup", handleKeyUpListener);

    return () => {
      window.removeEventListener("keyup", handleKeyUpListener);
    };
  });

  return (
    <div className="grid grid-rows-5 gap-1.5 p-5 select-none">
      {inputWords.map((word, i) => (
        <WordleRow
          key={i}
          targetWord={targetWord}
          inputWord={word}
          isGuessed={i < currentIndex}
        />
      ))}
    </div>
  );
}
