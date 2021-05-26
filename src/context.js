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
    const [screen, setScreen] = useState('game');//start / game / final
    const [level, setLevel] = useState(4); //0
    const [yesno, setYesNo] = useState(null);
    const [isMobale, setIsMobale] = useState(getIsMobile());
    const [imgsLoaded, setImgsLoaded] = useState(false);
    const [countLoaded, setCountLoaded] = useState(0);
    const [overley, setOverley] = useState(true); //false

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

    useEffect(()=>{
        if(overley) {
            document.body.style.position = 'fixed';
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.position = null;
            document.body.style.overflow = null;
            document.body.style.height = null;
        }
    },[overley]);

    return (
        <Context.Provider value={{ IMAGES, em, isMobale, imgsLoaded, countLoaded, screen, startGame, overley, setOverley, level, yesno, setYesNo, changeLevel }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };