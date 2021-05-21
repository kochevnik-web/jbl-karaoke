import React, {useContext, useRef, useEffect} from 'react';
import gsap from 'gsap';
import {Context} from '../../context';
import Logo from '../Logo/Logo';
import DiscoBall from '../DiscoBall/DiscoBall';
import { useSpring, animated } from 'react-spring';

import './Start.scss';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / -70}px,${y / -70}px,0)`
const trans2 = (x, y) => `translate3d(${x / 170}px,0,0)`

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

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 1000, friction: 140 } }))

    return (
        <div className="start-app" ref={el => (refStart = el)}>
            <img src={IMAGES[0].url} alt={IMAGES[0].name} className="start-app-abs-image start-app-bg-left"/>
            <img src={IMAGES[1].url} alt={IMAGES[0].name} className="start-app-abs-image start-app-bg-right"/>
            <div className="start-paralax" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <animated.img
                    src={IMAGES[2].url}
                    alt={IMAGES[2].name}
                    style={{ transform: props.xy.interpolate(trans1) }}
                    className="start-paralax-confetti"
                />
                <animated.div className="start-paralax-discoball" style={{ transform: props.xy.interpolate(trans2) }}>
                    <img src={IMAGES[5].url} alt={IMAGES[5].name}/>
                </animated.div>
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
        </div>
    )
}
