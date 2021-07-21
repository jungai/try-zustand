import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';

// this is look pretty bad but
// micro-frontend we render react app
// more than one e.g. single-spa

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('app1'),
);

ReactDOM.render(
	<React.StrictMode>
		<App2 />
	</React.StrictMode>,
	document.getElementById('app2'),
);
