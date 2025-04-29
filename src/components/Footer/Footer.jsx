import { StyledFooter } from "./Footer.styled";
import { Container } from "../Container/Container";
import { useTranslation } from 'react-i18next';
import ScrollIntoView from 'react-scroll-into-view';
import useWindowSize from "../../custom-hooks/hooks";
import Logo from "../../assets/svg/Logo.svg";
import WhatsApp from "../../assets/svg/whatsapp.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Telegram from "../../assets/svg/telegram.svg";



export const Footer = () => {
    const { t } = useTranslation();
    const { renderMob } = useWindowSize();


    const phoneNumber = `${t('header.contactUsNumber')}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;



    return (
        <StyledFooter>
            <Container>
                <div className="footer-container">
                    {renderMob && (
                        <div className="mobile-render">
                            <ScrollIntoView className="footer-logo-item" selector="#HeroSection">
                                <Logo className="footer-logo" width={100} height={44}/>
                            </ScrollIntoView>
                            <address className="footer-adress">
                                <ul className="footer-contact-list">
                                    <li className="footer-contact-item">
                                        <a  className="footer-contact-link" 
                                            href={t('header.instagramLink')}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            aria-label="Instagram Contact Link"
                                        >
                                            <Instagram className="footer-icon" width={24} height={24}/>
                                        </a>
                                    </li>
                                    <li className="footer-contact-item">
                                        <a  className="footer-contact-link" 
                                            href={whatsappUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            aria-label="WhatsApp Contact Link"
                                        >
                                            <WhatsApp className="footer-icon" width={24} height={24}/>
                                        </a>
                                    </li>
                                    <li className="footer-contact-item">
                                        <a  className="footer-contact-link" 
                                            href={t('header.telegramLink')}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            aria-label="Telegram Contact Link"
                                        >
                                            <Telegram className="footer-icon" width={24} height={24}/>
                                        </a>
                                    </li>
                                </ul>
                            </address>
                        </div>
                    )}
                    <nav className="footer-nav">
                        {!renderMob && (
                            <ScrollIntoView className="footer-logo-item" selector="#HeroSection">
                                <Logo className="footer-logo" width={65} height={30}/>
                            </ScrollIntoView>
                        )}
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <ScrollIntoView selector='#AboutSection' className="footer-nav-link">
                                    <span>{t('header.about')}</span>
                                </ScrollIntoView>
                            </li>
                            <li className="footer-nav-item">
                                <ScrollIntoView selector='#LocationSection' className="footer-nav-link">
                                    <span>{t('header.location')}</span>
                                </ScrollIntoView>
                            </li>
                            <li className="footer-nav-item">
                                <ScrollIntoView selector='#EquipmentSection' className="footer-nav-link">
                                    <span>{t('header.equipment')}</span>
                                </ScrollIntoView>
                            </li>
                            <li className="footer-nav-item">
                                <ScrollIntoView selector='#ContactsSection' className="footer-nav-link">
                                    <span>{t('header.contacts')}</span>
                                </ScrollIntoView>
                            </li>
                        </ul>
                        {!renderMob && (
                            <address className="footer-adress">
                                <ul className="footer-contact-list">
                                    <li className="footer-contact-item">
                                        <a  className="footer-contact-link" 
                                            href={t('header.instagramLink')}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            aria-label="Instagram Contact Link"
                                        >
                                            <Instagram className="footer-icon" width={24} height={24}/>
                                        </a>
                                    </li>
                                    <li className="footer-contact-item">
                                        <a  className="footer-contact-link" 
                                            href={whatsappUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            aria-label="WhatsApp Contact Link"
                                        >
                                            <WhatsApp className="footer-icon" width={24} height={24}/>
                                        </a>
                                    </li>
                                    <li className="footer-contact-item">
                                        <a  className="footer-contact-link" 
                                            href={t('header.telegramLink')}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            aria-label="Telegram Contact Link"
                                        >
                                            <Telegram className="footer-icon" width={24} height={24}/>
                                        </a>
                                    </li>
                                </ul>
                            </address>
                        )}
                    </nav>
                </div>
            </Container>  
        </StyledFooter>
    )
};