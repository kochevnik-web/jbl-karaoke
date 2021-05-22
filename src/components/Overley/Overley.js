import React, {useContext, useRef, useEffect} from 'react';
import gsap from 'gsap';
import {Context} from '../../context';

import './Overley.scss';

export default function Overley() {

    const {IMAGES} = useContext(Context);

    let refElem = useRef(null);

    useEffect(() => {
        gsap.set(refElem, {opacity: 0});
        gsap.to(refElem, {
            delay: 0.2,
            duration: 0.75,
            opacity: 1,
            ease: "power2.out",
        });
    });

    return (
        <div className="overlay" ref={el => (refElem = el)}>
            <div className="overlay-message">
                <img src={IMAGES[9].url} alt={IMAGES[9].name}/>
                <div className="overlay-content">
                    <div className="overlay-content-text">
                        <span>
                        Атмосфера на караоке-вечеринке зависит и от того, насколько хорошо ты споешь — ведь никто не захочет слушать, как ты пытаешься вытянуть Adele без голоса и слуха. Что ж, приготовься: петь ничего не придется. Зато надо вспомнить строчки из любимых и известных песен! В общем, постарайся на 100 баллов и сделай так, чтобы твои гости веселились и танцевали несколько часов напролет!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
