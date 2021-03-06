import React, {useContext} from 'react';
import {Context} from '../../context';

import Start from '../Start/Start';
import Game from '../Game/Game';
import Final from '../Final/Final';
import Overley from '../Overley/Overley';
import Loader from '../Loader/Loader';
import Turn from '../Turn/Turn';

import './App.scss';

function App() {

    const {em, imgsLoaded, isMobale, screen, overley} = useContext(Context);

    let cls = ['app', 'app-jbl'];

    if(isMobale) cls.push('app-mobile');

    return (
        <div className={cls.join(' ')} style={{fontSize: em}}>
            {imgsLoaded ? (
                <>
                    {screen === 'start' && <Start />}
                    {isMobale && screen !== 'start' && screen !== 'final' ? (
                        <Turn />
                    ) : (
                        <>
                            {screen === 'game' && <Game />}
                            {overley && <Overley />}
                        </>
                    )}
                    {screen === 'final' && <Final />}
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default App;
