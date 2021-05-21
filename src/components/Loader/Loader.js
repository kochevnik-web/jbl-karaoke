import React, {useContext, useState, useEffect} from 'react';
import {Context} from '../../context';

import './Loader.scss';

export default function Loader() {

    const [width, setWidth] = useState(0);

    const {IMAGES, countLoaded} = useContext(Context);

    useEffect(() => {
        setWidth( 100 / IMAGES.length * countLoaded);
    // eslint-disable-next-line
    }, [countLoaded]);

    return (
        <div className="loader">
            <div className="loader-text">
                <span>Загрузка...</span>
            </div>
            <div className="loader-bar">
                <div className="loader-bar-after" style={{width: width + '%'}}></div>
            </div>
        </div>
    )
}
