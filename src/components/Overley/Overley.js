import React, {useContext, useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import {Context} from '../../context';

import data from './overleyData';

import './Overley.scss';

export default function Overley() {

    const {IMAGES} = useContext(Context);

    const [countOverley, setCoutnOverlaey] = useState(0);
    const [animation, setAnimation] = useState(0);

    let refElem = useRef(null);
    let refWin = useRef(null);

    useEffect(() => {
        gsap.set(refElem, {opacity: 0});
        gsap.to(refElem, {
            delay: 0.2,
            duration: 0.75,
            opacity: 1,
            ease: "power2.out",
        });
    }, []);

    useEffect(() => {
        if(animation !== 0) {
            gsap.to(refWin, {
                duration: 0.5,
                x: '-100%',
                opacity: 0,
                ease: "back.in",
            });
            gsap.set(refWin, {x: '100%', delay: 0.5, opacity: 1})
            gsap.to(refWin, {
                duration: 0.5,
                x: 0,
                delay: 0.5,
                ease: "back.out",
            });
        }
    }, [animation]);

    const nextOverlay = () => {
        setAnimation(animation + 1);
        setTimeout(() => {
            setCoutnOverlaey(countOverley + 1);
        }, 400);
    }

    return (
        <div className="overlay" ref={el => (refElem = el)}>
            <div className="overlay-message" ref={el => (refWin = el)} style={data[countOverley].style}>
                <img src={IMAGES[data[countOverley].idBg].url} alt={IMAGES[data[countOverley].idBg].name}/>
                <div className="overlay-content">
                    <div className="overlay-content-text" >
                        <div dangerouslySetInnerHTML={{__html: data[countOverley].content}}></div>

                        {data[countOverley].typeBtn === 'arrow' && (
                            <div className="overlay-content-btn-arrow" onClick={nextOverlay}>
                                <img src={IMAGES[10].url} alt={IMAGES[10].name}/>
                            </div>
                        )}

                        {data[countOverley].typeBtn === 'next' && (
                            <div className="overlay-content-buttons">
                                <div className="overlay-content-btn" onClick={nextOverlay}>
                                    <span>
                                        Запевай
                                    </span>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}
