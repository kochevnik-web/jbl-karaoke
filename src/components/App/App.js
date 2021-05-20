import React, {useContext} from 'react';
import {Context} from '../../context';

import Start from '../Start/Start';

import './App.scss';

function App() {

    const {em, imgsLoaded} = useContext(Context);

    return (
        <div className="app app-jbl" style={{fontSize: em}}>
            {imgsLoaded && <Start />}
        </div>
    );
}

export default App;
