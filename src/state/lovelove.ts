import create from 'zustand';
import { devtools } from 'zustand/middleware';

export interface IUseLoveLoveState {
	myLove: string;
	changeMyLove: (person: string) => void;
}

export const useLoveLove = create<IUseLoveLoveState>(
	// dev tools can use with redux dev tools !!
	// see https://github.com/pmndrs/zustand#redux-devtools
	devtools((set) => ({
		myLove: 'iu',
		changeMyLove: (person: string) =>
			set((_state) => ({ myLove: person === 'iu' ? 'always iu' : person })),
	})),
);
