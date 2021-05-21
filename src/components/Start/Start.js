import React, {useContext, useRef, useEffect} from 'react';
import gsap from 'gsap';
import {Context} from '../../context';
import StartParalax from '../StartParalax/StartParalax';
import Logo from '../Logo/Logo';

import './Start.scss';

export default function Start() {

    let refStart = useRef(null);

    const {IMAGES} = useContext(Context);

    useEffect(() => {
        gsap.to(refStart, {
            duration: 0.75,
            opacity: 1,
            ease: "power2.in",
        });
    });

    return (
        <div className="start-app" ref={el => (refStart = el)}>
            <img src={IMAGES[0].url} alt={IMAGES[0].name} className="start-app-abs-image start-app-bg-left"/>
            <img src={IMAGES[1].url} alt={IMAGES[0].name} className="start-app-abs-image start-app-bg-right"/>
            <StartParalax />
            <div className="start-app-content">
                <div className="start-app-content-header">
                    <div className="start-app-content-header-text">
                        <span>
                            ИГРА
                        </span>
                    </div>
                    <Logo />
                </div>
                <div className="start-app-content-title">
                    <div className="start-app-content-title-text">
                        <span>Исполняй на 5 звезд и зажги вечеринку с JBL!</span>
                    </div>
                    <img src={IMAGES[4].url} alt={IMAGES[4].name}/>
                </div>
            </div>
        </div>
    )
}
