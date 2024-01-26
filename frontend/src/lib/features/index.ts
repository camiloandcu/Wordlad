import { combineSlices } from '@reduxjs/toolkit'
import { wordleSlice } from './wordle/wordleSlice'

export const rootReducer = combineSlices(wordleSlice)