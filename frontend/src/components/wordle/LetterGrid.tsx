"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Variants used in animations
const variants = {
  default: { scale: 1, rotateY: 0 },
  guessed: { scale: 1.1, rotateY: 90 },
  entered: { scale: 1.1 },
};

type Props = {
  letter: string;
  bgColor?: string;
  borderColor?: string;
};

export default function LetterGrid(props: Props) {
  const [entered, setEntered] = useState(false);
  const [guessed, setGuessed] = useState(false);
  const { letter, bgColor, borderColor } = props;

  useEffect(() => {
    // Set entered to true when a letter is entered
    if (letter) {
      setEntered(true);

      // Reset entered after short delay
      const timeout = setTimeout(() => {
        setEntered(false);
      }, 250);

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    }
  }, [letter]);

  useEffect(() => {
    // Set guessed to true when the word is guessed
    if (bgColor) {
      setGuessed(true);

      // Reset guessed after short delay
      const timeout = setTimeout(() => {
        setGuessed(false);
      }, 250);

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    }
  }, [bgColor]);

  const currentVariant = guessed ? "guessed" : entered ? "entered" : "default";

  return (
    <motion.div
      className={`flex h-14 w-14 items-center justify-center border-2 rounded-md ${borderColor} font-bold uppercase text-3xl ${bgColor}`}
      animate={currentVariant}
      variants={variants}
      transition={{ duration: 0.25 }}
    >
        {letter}
    </motion.div>
  );
}
