import React, { useState } from 'react';
import { useLoveLove } from './state/lovelove';

function App(): React.ReactElement {
	const [someOne] = useState(['iu', 'rose', 'yoona', 'ryeo won']);
	const myLove = useLoveLove((state) => state.myLove);
	const changeMyLove = useLoveLove((state) => state.changeMyLove);

	// get all states
	console.log(useLoveLove());

	return (
		<div>
			<h1>Hello it App 1</h1>
			<hr />
			<p>my love is {myLove} ❤️</p>
			<button
				onClick={() =>
					changeMyLove(someOne[Math.floor(Math.random() * someOne.length)])
				}
			>
				change
			</button>
		</div>
	);
}

export default App;
