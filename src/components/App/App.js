import React, {useContext} from 'react';
import {Context} from '../../context';

import './App.scss';

function App() {

    const {em} = useContext(Context);

    return (
        <div className="app app-jbl" style={{fontSize: em}}>
            JBL Karaoke
        </div>
    );
}

export default App;
