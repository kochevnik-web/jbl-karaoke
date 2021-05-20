import React, {useContext} from 'react';
import {Context} from '../../context';

import './Logo.scss';

export default function Logo() {

    const {IMAGES} = useContext(Context);

    return (
        <div className="jbl-logo">
            <img src={IMAGES[3].url} alt={IMAGES[3].name} />
        </div>
    )
}
