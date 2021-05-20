import React, {useContext, useState} from 'react';
import {Context} from '../../context';

import './StartParalax.scss';

export default function StartParalax() {

    const {IMAGES} = useContext(Context);

    const [bp, setBp] = useState({left: 0, top: 0})

    const paralax = e => {
        setBp({left: (e.pageX * -1 / 100) + 'px ', top: (e.pageY * -1 / 100 - 3) + 'px'});
    }

    return (
        <div className="start-paralax">
            <img
                src={IMAGES[2].url}
                alt={IMAGES[2].name}
                style={bp}
                onMouseMove={paralax}
            />
        </div>
    )
}
