import React, {useContext, useRef, useEffect} from 'react';
import {Context} from '../../context';
import { useSpring, animated } from 'react-spring';
import Shers from '../Shers/Shers';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import Logo from '../Logo/Logo';
import './Final.scss';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / -70}px,${y / -70}px,0)`

export default function Final() {

    gsap.registerPlugin(ScrollTrigger);

    const {IMAGES, isMobale} = useContext(Context);
    let refFinish = useRef(null);

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 1000, friction: 140 } }));

    useEffect(() => {
        gsap.to(refFinish, {
            duration: 0.5,
            opacity: 1,
            ease: "power2.in",
        });

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
    });

    return (
        <div
            className="app-final"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
            ref={el => (refFinish = el)}
        >
            {!isMobale && <img src={IMAGES[77].url} alt={IMAGES[77].name} className="app-final-bgimg"/>}
            {!isMobale ? (
                <animated.img
                    src={IMAGES[76].url}
                    alt={IMAGES[76].name}
                    style={{ transform: props.xy.interpolate(trans1) }}
                    className="final-paralax-confetti"
                />
            ) : null }
            <div className="app-final-content">
                <Logo />
                <div className="app-final-img">
                    {isMobale ? (
                        <img className={IMAGES[78].name} src={IMAGES[78].url} alt={IMAGES[78].name}/>
                    ) : (
                        <img className={IMAGES[75].name} src={IMAGES[75].url} alt={IMAGES[75].name}/>
                    )}
                </div>
                <div className="app-final-title">
                    <span>You are the champion</span>
                </div>
                <div className="app-final-text">
                    <span>
                        <p>Все, что мы можем сказать, — это было ВАУ! Вечеринка прошла замечательно, ты пел от души, аплодисменты заглушали басы и кто-то незнакомый даже кричал тебе BRAVO с танцпола. Гости разошлись довольными и охрипшими. Все просят организовать такую тусовку еще раз!</p>

                        <p>И это несложно с новым продуктом от JBL — акустической системой PartyBox On-The-Go. Это настоящий портативный музыкальный комбайн, подходящий под массу сценариев: караоке-вечеринка, рэп-батл, танцы в загородном доме или уютный квартирник с гитарой. Для любого настроения и любой компании — эта акустическая система создаст правильное музыкальное и световое сопровождение.</p>

                        <p>За легендарный звук JBL отвечают сразу три динамика, а если и этого окажется мало, две JBL PartyBox On-The-Go можно объединить между собой. Вечеринка может перейти на пляж или к бассейну — корпус защищен от пыли и влаги. Встроенный аккумулятор рассчитан до 6 часов беспрерывного воспроизведения.</p></span>
                </div>
                <div className="app-final-buttons">
                    <a href="#" target="_blank" className="app-btn app-btn-red">
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
