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

    const renderTab = windowWidth < 1440 && windowWidth >= 768;
    const renderMob = windowWidth < 768;
    const renderPC = windowWidth >= 1440 & windowWidth < 1920;
    const renderFHD = windowWidth >= 1920;

    return { renderTab, renderMob, windowWidth, renderPC, renderFHD };
};
  
export default useWindowSize;
