"use client";

import LetterGrid from "./LetterGrid";

const gridsBgColor = (inputWord: string, targetWord: string): string[] => {
  const bgColors = new Array(5).fill("");
  const targetChars = targetWord.split("");

  for (let i = 0; i < inputWord.length; i++) {
    if (inputWord[i] === targetWord[i]) {
      bgColors[i] = "bg-green-600";
      targetChars[i] = " ";
    }
  }

  for (let i = 0; i < inputWord.length; i++) {
    if (bgColors[i] === "" && targetWord.includes(inputWord[i])) {
      bgColors[i] = "bg-yellow-500";
      const index = targetChars.indexOf(inputWord[i]);
      targetChars[index] = " ";
    } else if (bgColors[i] === "") {
      bgColors[i] = "bg-gray-700";
    }
  }

  return bgColors;
};

interface Props {
  isGuessed: boolean;
  inputWord: string;
  targetWord: string;
}

export default function WordleRow(props: Props) {
  const { isGuessed, inputWord, targetWord } = props;
  const bgColors = gridsBgColor(inputWord, targetWord);

  return (
    <div className="grid grid-cols-5 gap-1.5">
      {new Array(5).fill(0).map((_, i) => {
        const bgColor = !isGuessed ? undefined : bgColors[i];

        const borderColor = isGuessed
          ? "border-transparent"
          : inputWord[i] === undefined
          ? "border-zinc-300"
          : "border-black";

        return (
          <LetterGrid
            key={i}
            letter={inputWord[i]}
            bgColor={bgColor}
            borderColor={borderColor}
          />
        );
      })}
    </div>
  );
}
