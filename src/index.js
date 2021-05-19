import React from 'react';
import ReactDOM from 'react-dom';
import {ContextProvider} from './context';
import './index.scss';
import App from './components/App/App';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);