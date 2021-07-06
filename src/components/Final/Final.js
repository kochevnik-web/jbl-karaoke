import React, { useContext, useRef, useEffect } from 'react';
import { Context } from '../../context';
import { useSpring, animated } from 'react-spring';
import Shers from '../Shers/Shers';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Logo from '../Logo/Logo';
import './Final.scss';
import data from './dataFinal';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / -70}px,${y / -70}px,0)`

export default function Final() {

    gsap.registerPlugin(ScrollTrigger);

    const { IMAGES, isMobale, result } = useContext(Context);
    let refFinish = useRef(null);

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 1000, friction: 140 } }));

    useEffect(() => {
        gsap.to(refFinish, {
            duration: 0.5,
            opacity: 1,
            ease: "power2.in",
        });

        if (!isMobale) {
            gsap.to('.Shers span', {
                duration: 0.8,
                stagger: 0.1,
                x: 0,
                ease: "Back.easeOut",
                scrollTrigger: {
                    trigger: '.Shers',
                    start: 'top 75%',
                    end: 'bottom 60%',
                    // markers: true
                }
            });
        }
    });

    const res = result.filter(el => el).length;
    console.log(res);

    let dataFinal = data[0];
    if (res > 4) dataFinal = data[1];
    if (res > 7) dataFinal = data[2];

    const mainImage = () => {
        const img = isMobale ? 'mobileImg' : 'mainImg';
        return (
            <img
                className={IMAGES[dataFinal[img]].name}
                src={IMAGES[dataFinal[img]].url}
                alt={IMAGES[dataFinal[img]].name}
            />
        )
    }

    return (
        <div
            className="app-final"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
            ref={el => (refFinish = el)}
        >
            {!isMobale && <img src={IMAGES[77].url} alt={IMAGES[77].name} className="app-final-bgimg" />}
            {!isMobale ? (
                <animated.img
                    src={IMAGES[76].url}
                    alt={IMAGES[76].name}
                    style={{ transform: props.xy.interpolate(trans1) }}
                    className="final-paralax-confetti"
                />
            ) : null}
            <div className="app-final-content">
                <Logo />
                <div className="app-final-img">
                    {mainImage()}
                </div>
                <div className="app-final-title">
                    <span dangerouslySetInnerHTML={{ __html: dataFinal.title }}></span>
                </div>
                <div className="app-final-text">
                    <span dangerouslySetInnerHTML={{ __html: dataFinal.text }}></span>
                </div>
                <div className="app-final-buttons">
                    <a
                        href="https://bit.ly/2V0cLAM"
                        target="_blank"
                        className="app-btn app-btn-red"
                        rel="noreferrer"
                    >
                        <span>Хочу знать больше</span>
                    </a>
                    <div className="app-btn app-btn-white" onClick={() => window.location.reload()}>
                        <span>Пройти еще раз</span>
                    </div>
                </div>
            </div>
            <Shers />
        </div>
    )
}
