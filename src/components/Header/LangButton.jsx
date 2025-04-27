import { useState, useRef, useCallback, useEffect } from "react";
import { useTranslation } from 'react-i18next';



export const LangButton = () => {
    const langButton = useRef(null);
    const [isLangMenu, setLangMenu] = useState(false);
    const { i18n } = useTranslation();
    const savedLang = localStorage.getItem('language');
    const initialLang = savedLang || i18n.language.split('-')[0].toUpperCase();
    const [langValue, setLangValue] = useState(initialLang);
    const [langToShow, setLangToShow] = useState(initialLang);


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


    const langArray = [
        {'lang': 'RO'},
        {'lang': 'EN'},
        {'lang': 'UA'},
        {'lang': 'RU'},
    ];

    const choseLang = (lang) => {
        i18n.changeLanguage(lang.toLowerCase());
        setLangValue(lang);
        setLangMenu(false);
    };

    useEffect(() => {
        localStorage.setItem('language', langValue);
        i18n.changeLanguage(langValue.toLowerCase());
    },[i18n, langValue]);

    useEffect(() => {
        const languageCode = langValue.split('-')[0];
        setLangToShow(languageCode);
    },[langValue]);


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
                {langArray.filter(({ lang }) => lang !== langToShow).map(({lang}, index) => (
                    <li key={index} className="lang-drop-item" onClick={() => choseLang(lang)}>
                        <p>{lang}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};