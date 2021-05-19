import React, {useState, useEffect} from "react";

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

    useEffect(()=>{
        setEm(getEm());
        setIsMobale(getIsMobile());
    },[]);

    window.addEventListener('resize', () =>{
        setEm(getEm());
        setIsMobale(getIsMobile());
    });

    return (
        <Context.Provider value={{ em, isMobale }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };