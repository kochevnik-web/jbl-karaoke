import React, {useContext} from 'react';

import {Context} from '../../context';

import './Turn.scss';

export default function Turn() {

    const {IMAGES} = useContext(Context);

    return (
        <div className="app-turn">
            <img src={IMAGES[15].url} alt={IMAGES[15].name}/>
        </div>
    )
}
