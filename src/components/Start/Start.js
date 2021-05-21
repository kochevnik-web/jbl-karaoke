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
                <div className="start-app-content-paragraph">
                    <span>
                        Отличная вечеринка — это когда гости танцуют, поют и общаются под любимую музыку. Веселая и дружеская атмосфера вдохновляет на то, чтобы взять в руки микрофон и устроить настоящий караоке-батл! Если твоя вечеринка проходит с JBL, выпустившим новую акустическую систему JBL PartyBox On-the-Go с беспроводным микрофоном, то у тебя больше нет причин стесняться своих талантов. Готов поразить всех своим бесподобным выступлением? Исполняй треки — а мы расскажем, получилось ли у тебя устроить незабываемый вечер для своих гостей.
                    </span>
                </div>
                <div className="start-app-content-button app-btn app-btn-red">
                    <span>Зажигаем!</span>
                </div>
            </div>
        </div>
    )
}
