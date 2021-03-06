import React, {useContext} from 'react';
import {Context} from '../../context';

import './Scale.scss';

export default function Scale() {

    const {IMAGES, result} = useContext(Context);

    const scaleElements = result.map((el, indx) => {
        let arr = [...Array(11).keys()];

        let item = arr.map((s, i) => {
            return (<rect x={i * 10 + 7} y={indx * 31} width="25" height="7" rx="2" transform={'rotate(90 ' + (i * 10 + 7) +  ' ' + (indx * 31) + ')'} fill={(i + 1) <= 11 - el ? 'white' : 'red'}/>);
        });
        return item;
    });

    return (
        <div className="app-scale">
            <img src={IMAGES[27].url} alt={IMAGES[27].name}/>
            <div className="app-scale-wrap">
                <svg width="10.7em" height="30.4em" viewBox="0 0 107 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {scaleElements}
                </svg>
            </div>
        </div>
    )
}
