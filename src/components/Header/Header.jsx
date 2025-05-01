import { StyledHeader } from "./Header.styled";
import { Container } from "../Container/Container";
import Logo from "../../assets/svg/Logo.svg";
import Close from "../../assets/svg/close.svg";
import Burger from "../../assets/svg/mob-menur.svg";
import { LangButton } from "./LangButton";
import useWindowSize from "../../custom-hooks/hooks";
import ScrollIntoView from 'react-scroll-into-view';
import { useState } from "react";
import { NavList } from "./NavList/NavList";


export const Header = ({i18n, setLangValue, langToShow, langArray}) => {
    const { renderMob } = useWindowSize();
    const [isMobMenuActive, setMobMenuActive] = useState(false);


    const setMobileMenuActive = (event) => {
        setMobMenuActive(prevState => !prevState);
        if (!isMobMenuActive) {
            event.stopPropagation();
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const toggleMobileStyled = () => {
        return isMobMenuActive ? 'is-mob-menu-active' : '';
    };

    
    return (
        <StyledHeader>
            <Container>
                <div className="header-mobile">
                    <LangButton
                        langArray={langArray}
                        setLangValue={setLangValue}
                        langToShow={langToShow}
                        i18n={i18n}
                    />
                    {renderMob ? (
                        <>
                            <ScrollIntoView className="mob-logo-item" selector="#HeroSection">
                                <Logo className="header-logo" width={65} height={30}/>
                            </ScrollIntoView>
                            <div className="burger-menu-item">
                            <button 
                                    type="buttton" 
                                    className="burger-button"
                                    aria-expanded="false"
                                    aria-controls="burger-button"
                                    aria-label="Burger Button"
                                    onClick={setMobileMenuActive} 
                                >
                                    <Burger className="mob-burger" width={30} height={30}/>
                                </button>
                            </div>
                            <div className={`mobile-menu ${toggleMobileStyled()}`}>
                                <button className="mobile-close-button"
                                    type="buttton" 
                                    aria-expanded="false"
                                    aria-controls="mobile-close-button"
                                    aria-label="Close Button"
                                    onClick={setMobileMenuActive} 
                                >
                                    <Close className="close-icon" width={30} height={30}/>
                                </button>
                                <NavList
                                    renderMob={renderMob}
                                    setMobileMenuActive={setMobileMenuActive}
                                />
                            </div>
                        </>
                    ) : (
                        <NavList/>
                    )}
                </div>
            </Container>
        </StyledHeader>
    );
};