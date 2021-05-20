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
    const [countLoaded, setCountLoaded] = useState(false)

    useEffect(() => {
        const loadImage = image => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = image.url
                // wait 2 seconds to simulate loading time
                loadImg.onload = () => {
                    resolve(image.url);
                    console.log('Loaded img', image.name);
                }

                loadImg.onerror = err => reject(err)
        });
    }

      Promise.all(IMAGES.map(image => loadImage(image)))
        .then(() => setImgsLoaded(true))
        .catch(err => console.log("Failed to load images", err))
    }, []);

    useEffect(()=>{
        setEm(getEm());
        setIsMobale(getIsMobile());
    },[]);

    window.addEventListener('resize', () =>{
        setEm(getEm());
        setIsMobale(getIsMobile());
    });

    return (
        <Context.Provider value={{ IMAGES, em, isMobale, imgsLoaded }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };