import { createStore } from '.';
import { devtools } from 'zustand/middleware';

export interface IUseLoveLoveState {
	myLove: string;
	changeMyLove: (person: string) => void;
}

export const useLoveLove = createStore<IUseLoveLoveState>(
	// dev tools can use with redux dev tools !!
	// see https://github.com/pmndrs/zustand#redux-devtools
	devtools((set) => ({
		myLove: 'someone',
		changeMyLove: (person: string) =>
			set((_state) => ({ myLove: person === 'iu' ? 'always iu' : person })),
	})),
);
