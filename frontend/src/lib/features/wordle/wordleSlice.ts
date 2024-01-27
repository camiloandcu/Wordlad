import { createSlice } from "@reduxjs/toolkit";

interface WordleState {
  targetWord: string;
  inputWords: string[];
  currentIndex: number;
}

const initialState = {
  targetWord: "",
  inputWords: new Array(6).fill(""),
  currentIndex: 0,
} as WordleState;

export const wordleSlice = createSlice({
  name: "wordle",
  initialState,
  reducers: {
    newGame: (state) => {
      state.targetWord = "short";
      state.inputWords = new Array(6).fill("");
      state.currentIndex = 0;
    },
    submitWord: (state) => {
      state.currentIndex += 1;
    },
    deleteLetter: (state) => {
      const currentWord = state.inputWords[state.currentIndex];
      if (currentWord.length > 0) {
        state.inputWords[state.currentIndex] = currentWord.slice(0, -1);
      }
    },
    insertLetter: (state, action) => {
      const currentWord = state.inputWords[state.currentIndex];
      if (currentWord.length < 5 && action.payload.match(/^[A-z]$/)) {
        state.inputWords[state.currentIndex] += action.payload.toLowerCase();
      }
    },
  },
});

const wordleReducer = wordleSlice.reducer;

export const { newGame, submitWord, deleteLetter, insertLetter } =
  wordleSlice.actions;
export default wordleReducer;
