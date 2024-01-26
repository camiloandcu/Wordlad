import { RootState } from "@/lib/store";
import { createSelector } from "@reduxjs/toolkit";

const selectWordle = (state: RootState) => state.wordle;

export const selectTargetWord = createSelector(
  selectWordle,
  (state) => state.targetWord
);

export const selectInputWords = createSelector(
  selectWordle,
  (state) => state.inputWords
);

export const selectCurrentIndex = createSelector(
  selectWordle,
  (state) => state.currentIndex
);

export const selectWon = createSelector(
  [selectTargetWord, selectInputWords, selectCurrentIndex],
  (targetWord, inputWords, currentIndex) =>
    currentIndex > 0 && inputWords[currentIndex - 1] === targetWord
);

export const selectLost = createSelector(
  [selectCurrentIndex, selectWon],
  (index, won) => index >= 6 && !won
);
