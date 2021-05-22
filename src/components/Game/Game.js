import React, {useContext} from 'react';
import {Context} from '../../context';

import './Game.scss';

export default function Game() {

    const {IMAGES} = useContext(Context);

    return (
        <div className="app-game">
            <img className="app-game-bgimg top" src={IMAGES[7].url} alt={IMAGES[7].name}/>
            <img className="app-game-elem" src={IMAGES[8].url} alt={IMAGES[8].name} style={{width: '16.6em', height: '51.3em'}}/>
        </div>
    )
}
