import { useState, useRef, useCallback, useEffect } from "react";
import { useTranslation } from 'react-i18next';



export const LangButton = ({setLangValue, langToShow, langArray}) => {
    const langButton = useRef(null);
    const [isLangMenu, setLangMenu] = useState(false);
    const { i18n } = useTranslation();



    const toggleLangMenuOpen = () => {
        setLangMenu(prevState => !prevState);
    };

    const toggleLangMenu = () => {
        return isLangMenu ? 'visible' : '';
    };
    
    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            if(isLangMenu){
                setLangMenu(false);
            }
        }
    },[isLangMenu, setLangMenu]);


    const onBackdropClick = useCallback(event => {
        if(langButton.current && !langButton.current.contains(event.target)){                        
            setLangMenu(false);
        }
    },[setLangMenu]);

    
    useEffect(() => {
        document.addEventListener('click', onBackdropClick);
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('click', onBackdropClick);
            document.removeEventListener('keydown', handleKeyPress);
        }
    },[handleKeyPress, onBackdropClick]);


    const choseLang = (lang) => {
        i18n.changeLanguage(lang.toLowerCase());
        setLangValue(lang);
        setLangMenu(false);
    };


    return(
        <div className="lang-button-item" ref={langButton}>
            <button 
                type="buttton" 
                className="lang-button"
                aria-expanded="false"
                aria-controls="language-button"
                aria-label="Language Button" 
                onClick={toggleLangMenuOpen}
            >
                {langToShow}
            </button>        
            <ul className={`lang-drop-list ${toggleLangMenu()}`}>
                {langArray && langArray.filter(({ lang }) => lang !== langToShow).map(({lang}, index) => (
                    <li key={index} className="lang-drop-item" onClick={() => choseLang(lang)}>
                        <p>{lang}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};