import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppContextProvider } from './providers/AppContextProvider';
import App from './App';

import 'virtual:windi.css';
import './index.css';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Router>
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </Router>
        </React.StrictMode>);
} else {
    throw 'Root element not found. Unable to render the App.';
}

// const rootEl = document.getElementById('root');
// console.log(rootEl);
// if (rootEl) {
//     const root = ReactDOM.createRoot(rootEl);
//     root.render(
//         <React.StrictMode>
//             <Router>
//                 <App />
//             </Router>
//         </React.StrictMode>);
// } else {
//     throw 'Root element not found. Unable to render the App.';
// }
