import React, {useContext} from 'react';
import {Context} from '../../context';

import levels from './levelsData';

import './Game.scss';

export default function Game() {

    const {IMAGES, level, yesno, changeLevel, overley} = useContext(Context);

    const {bgImg, corect, nocorect} = levels[level];

    let id = bgImg;

    if(yesno === true) id = corect;
    if(yesno === false) id = nocorect;

    return (
        <div className="app-game">
            <img className="app-game-bgimg" src={IMAGES[id].url} alt={IMAGES[id].name}/>
            {!overley && (
                <div className="app-game-btn-next" onClick={changeLevel}>
                    <span>Далее</span>
                </div>
            )}
        </div>
    )
}
