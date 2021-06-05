import React, {useContext} from 'react';
import {Context} from '../../context';

import './AnimateIMG.scss';

export default function AnimateIMG({animate}) {

    const {IMAGES} = useContext(Context);

    const elements = animate.map(el =>{
        return <img key={el.id} src={IMAGES[el.id].url} alt={IMAGES[el.id].name} style={el.style}/>
    });

    return (
        <div className="animate-img">
            {elements}
        </div>
    )
}
