import React, {useContext, useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import {Context} from '../../context';

import data from './overleyData';

import './Overley.scss';

export default function Overley() {

    const {IMAGES, setOverley, setYesNo, level} = useContext(Context);

    const [countOverley, setCoutnOverlaey] = useState(0);
    const [animation, setAnimation] = useState(0);
    const [overAnimation, setOverAnimation] = useState(false);
    const [check, setCheck] = useState(false);

    const {style, idBg, content, typeBtn, variants} = data[level][countOverley];

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
        if(animation !== 0 && animation !== data[level].length) {
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
    // eslint-disable-next-line
    }, [animation]);


    useEffect(() => {
        if(overAnimation){
            gsap.to(refElem, {
                delay: 0.8,
                duration: 0.75,
                opacity: 0,
                ease: "power2.in",
            });

            let timout = setTimeout(() => {
                setOverley(false);
                setYesNo(variants.data[check].ans);
            }, 1600);

            return () => {
                clearTimeout(timout);
            }
        }
    // eslint-disable-next-line
    }, [overAnimation]);

    const nextOverlay = () => {
        setAnimation(animation + 1);
        setTimeout(() => {
            setCoutnOverlaey(countOverley + 1);
        }, 400);
    }

    const handleAnsver = ans => {
        if(check === false){
            setAnimation(0);
            setCheck(ans);
            setOverAnimation(true);
        }
    }

    return (
        <div className="overlay" ref={el => (refElem = el)}>
            <div className="overlay-message" ref={el => (refWin = el)} style={style}>
                <img src={IMAGES[idBg].url} alt={IMAGES[idBg].name}/>
                <div className="overlay-content">
                    <div className="overlay-content-text" >
                        <div dangerouslySetInnerHTML={{__html: content}}></div>

                        {typeBtn === 'arrow' && (
                            <div className="overlay-content-btn-arrow" onClick={nextOverlay}>
                                <img src={IMAGES[9].url} alt={IMAGES[9].name}/>
                            </div>
                        )}

                        {typeBtn === 'next' && (
                            <div className="overlay-content-buttons">
                                <div className="overlay-content-btn" onClick={nextOverlay}>
                                    <span>
                                        Запевай
                                    </span>
                                </div>
                            </div>
                        )}

                        {typeBtn === 'variants' && (
                            <div className={'overlay-content-buttons' + (variants.vertical ? ' vertical' : '')}>
                                {variants.data.map((el, i) => {

                                    let clx = ['ans-button'];
                                    if(check !== false) {
                                        clx.push('ans-button-check');
                                        if(i === check && !el.ans) {
                                            clx.push('ans-button-no');
                                        }
                                        if(el.ans){
                                            clx.push('ans-button-yes');
                                        }
                                    }

                                    return (
                                        <div key={i} className={clx.join(' ')} onClick={() => handleAnsver(i)}>
                                            <span>{el.title}</span>
                                        </div>
                                    )
                                })}

                                {variants.before && (
                                    <span dangerouslySetInnerHTML={{__html: variants.before}}></span>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}
