import { useState, useEffect } from "react";

function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderTab = windowWidth < 1280;
    const renderMob = windowWidth < 768;

    return { renderTab, renderMob, windowWidth };
};
  
export default useWindowSize;
