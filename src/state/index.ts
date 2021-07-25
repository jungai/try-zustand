import { immer } from './immer';
import create from 'zustand';
import { pipe } from 'ramda';

export const createStore = pipe(immer, create);
