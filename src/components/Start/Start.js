import React, {useContext} from 'react';
import {Context} from '../../context';

import './Start.scss';

export default function Start() {

    const {IMAGES} = useContext(Context);

    return (
        <div className="start-app">
            <img src={IMAGES[0].url} alt={IMAGES[0].name} className="start-app-abs-image start-app-bg-left"/>
            <img src={IMAGES[1].url} alt={IMAGES[0].name} className="start-app-abs-image start-app-bg-right"/>
            <img src={IMAGES[2].url} alt={IMAGES[2].name} className="start-app-abs-image start-app-bg-balls"/>
        </div>
    )
}
