import { StyledNavigation } from "./NavList.styled";
import { useTranslation } from 'react-i18next';
import ScrollIntoView from 'react-scroll-into-view';
import Logo from "../../../assets/svg/Logo.svg";



export const NavList = ({renderMob, setMobileMenuActive}) => {
    const { t } = useTranslation();


    return(
        <StyledNavigation>
            {renderMob && (
                <ScrollIntoView className="mob-logo-item" selector="#HeroSection" onClick={setMobileMenuActive}>
                    <Logo className="header-logo burger-logo" width={65} height={30}/>
                </ScrollIntoView>
            )}
            <ul className="navigation-list">
                <li className="navigation-item">
                    <ScrollIntoView selector='#AboutSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>{t('header.about')}</span>
                    </ScrollIntoView>
                    {renderMob && (
                        <span className="underscore"></span>
                    )}
                </li>
                <li className="navigation-item">
                    <ScrollIntoView selector='#LocationSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>{t('header.location')}</span>
                    </ScrollIntoView>
                    {renderMob && (
                        <span className="underscore"></span>
                    )}
                </li>
                {!renderMob && (
                    <li className="navigation-item logo-item">
                        <ScrollIntoView className="mob-logo-item" selector="#HeroSection" onClick={setMobileMenuActive}>
                            <Logo className="header-logo burger-logo" width={65} height={30}/>
                        </ScrollIntoView>
                    </li>
                )}
                <li className="navigation-item">
                    <ScrollIntoView selector='#EquipmentSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>{t('header.equipment')}</span>
                    </ScrollIntoView>
                    {renderMob && (
                        <span className="underscore"></span>
                    )}
                </li>
                <li className="navigation-item">
                    <ScrollIntoView selector='#ContactsSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>{t('header.contacts')}</span>
                    </ScrollIntoView>
                    {renderMob && (
                        <span className="underscore"></span>
                    )}
                </li>
            </ul>
        </StyledNavigation>
    )
};