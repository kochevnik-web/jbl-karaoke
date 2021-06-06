import React, {useContext} from 'react';
import {Context} from '../../context';

import levels from './levelsData';
import Scale from '../Scale/Scale';
import AnimateIMG from '../AnimateIMG/AnimateIMG';

import './Game.scss';

export default function Game() {

    const {IMAGES, level, yesno, changeLevel, overley, globalHeight} = useContext(Context);

    const {bgImg, corect, nocorect, animatePlus, animateMinus} = levels[level];

    let id = bgImg;
    let animate = [];

    if(yesno !== null){
        animate = yesno ? animatePlus : animateMinus;
        id = yesno ? corect : nocorect;
    }

    return (
        <div className="app-game" style={{height: globalHeight}}>
            <img className="app-game-floor" src={IMAGES[48].url} alt={IMAGES[48].name}/>
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
