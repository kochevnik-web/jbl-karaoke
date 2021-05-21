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
    const [isMobale, setIsMobale] = useState(getIsMobile());
    const [imgsLoaded, setImgsLoaded] = useState(false)
    const [countLoaded, setCountLoaded] = useState(0)

    useEffect(() => {
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
            setImgsLoaded(true);
        } else {
            loadImage(IMAGES[countLoaded]);
        }


    }, [countLoaded]);

    useEffect(()=>{
        setEm(getEm());
        setIsMobale(getIsMobile());
    },[]);

    window.addEventListener('resize', () =>{
        setEm(getEm());
        setIsMobale(getIsMobile());
    });

    return (
        <Context.Provider value={{ IMAGES, em, isMobale, imgsLoaded, countLoaded }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };