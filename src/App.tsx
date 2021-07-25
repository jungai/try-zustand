import React from 'react';
import { useSong } from './state/song';

function App(): React.ReactElement {
	const songs = useSong((state) => state.songs);
	const addSong = useSong((state) => state.addSong);

	// get all states
	console.log(useSong());

	return (
		<div>
			<h1>Hello it App 1</h1>
			<hr />
			<ul>
				{songs.map((song) => (
					<li key={song.name}>
						{song.name} - {song.artist}
					</li>
				))}
			</ul>
			<button onClick={() => addSong({ name: 'weekend', artist: 'taeyeon' })}>
				add song
			</button>
		</div>
	);
}

export default App;
