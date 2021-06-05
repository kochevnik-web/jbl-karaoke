import React, {useContext} from 'react';
import {Context} from '../../context';

import levels from './levelsData';
import Scale from '../Scale/Scale';
import AnimateIMG from '../AnimateIMG/AnimateIMG';

import './Game.scss';

export default function Game() {

    const {IMAGES, level, yesno, changeLevel, overley, globalHeight} = useContext(Context);

    const {bgImg, corect, nocorect, animate} = levels[level];

    let id = bgImg;

    if(yesno === true) id = corect;
    if(yesno === false) id = nocorect;

    return (
        <div className="app-game" style={{height: globalHeight}}>
            <img className="app-game-bgimg" src={IMAGES[id].url} alt={IMAGES[id].name}/>
            {!overley && <AnimateIMG animate={animate} />}
            {!overley && (
                <div className="app-game-btn-next" onClick={changeLevel}>
                    <span>Далее</span>
                </div>
            )}
            <Scale />
        </div>
    )
}
