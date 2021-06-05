import React, {useState, useEffect} from "react";

import IMAGES from './dataImg';

const Context = React.createContext();

export default function ContextProvider({ children }) {

    function getEm(){
        if(window.innerWidth < window.innerHeight && window.innerWidth < 768){
            return window.innerWidth / 192 * 6;
        }else{
            return window.innerWidth / 192;
        }
    }

    function getIsMobile(){
        return window.innerWidth < window.innerHeight && window.innerWidth < 768 ? true : false;
    }

    const [em, setEm] = useState(getEm());
    const [screen, setScreen] = useState('start');//start / game / final
    const [level, setLevel] = useState(0); //0 //5
    const [yesno, setYesNo] = useState(null);
    const [isMobale, setIsMobale] = useState(getIsMobile());
    const [imgsLoaded, setImgsLoaded] = useState(false);
    const [countLoaded, setCountLoaded] = useState(0);
    const [overley, setOverley] = useState(false); //false
    const [result, setResult] = useState(0);

    useEffect(() => {
        let timer = null;

        const loadImage = image => {
                const loadImg = new Image()
                loadImg.src = image.url

                loadImg.onload = () => {
                    setCountLoaded(countLoaded + 1);
                    console.log('Loaded img', image.name);
                }

                loadImg.onerror = err => {
                    console.log(err);
                }
        };

        if(countLoaded === IMAGES.length){
            timer = setTimeout(() => {
                setImgsLoaded(true);
            }, 800);
        } else {
            loadImage(IMAGES[countLoaded]);
        }

        return () => {
            clearTimeout(timer);
        }

    }, [countLoaded]);

    useEffect(()=>{
        setEm(getEm());
        setIsMobale(getIsMobile());
    },[]);

    const startGame = () => {
        setOverley(true);
        setScreen('game');
    }

    window.addEventListener('resize', () =>{
        setEm(getEm());
        setIsMobale(getIsMobile());
    });

    const changeLevel = () => {
        setYesNo(null);
        setOverley(true);
        setLevel(level + 1);
    }

    return (
        <Context.Provider value={{ IMAGES, em, isMobale, imgsLoaded, countLoaded, screen, startGame, overley, setOverley, level, yesno, setYesNo, changeLevel, result, setResult }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };