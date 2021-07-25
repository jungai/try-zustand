import { createStore } from '..';

export interface ISongs {
	name: string;
	artist: string;
}

export interface IUseSongState {
	songs: ISongs[];
	addSong: (song: ISongs) => void;
}

export const useSong = createStore<IUseSongState>((set) => ({
	songs: [
		{ name: 'bbibbi', artist: 'iu' },
		{ name: 'galaxy', artist: 'taeyeon' },
		{ name: 'what i want to say', artist: 'acourve' },
	],
	addSong: (song) => set((state) => ({ songs: [...state.songs, song] })),
}));
