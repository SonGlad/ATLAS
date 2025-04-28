import { createPortal } from "react-dom";
import { ModalStyled } from "./Modal.styled";
import { useEffect, useCallback} from "react";
import CloseIcon from "../../assets/svg/close.svg";
import WhatsApp from "../../assets/svg/whatsapp.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Telegram from "../../assets/svg/telegram.svg";
import { useTranslation } from 'react-i18next';



const modalRoot = document.querySelector("#modal-root");


export const Modal = ({isModal, closeModal}) => {
    const { t } = useTranslation();

    const phoneNumber = `${t('header.contactUsNumber')}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;


    const handleClickClose = useCallback(() => {
        if(isModal) {
            closeModal();
        } else {
            return
        }
    },[closeModal, isModal]);

    
    const handleBackdropClick = useCallback(event => {
        if (event.target === event.currentTarget) {
            handleClickClose();
        }
    },[handleClickClose]);


    const handleKeyDown = useCallback(event => {
        if (event.key === "Escape") {
            handleClickClose();
        }
    },[handleClickClose]);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener('click', handleBackdropClick);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener('click', handleBackdropClick);
        };
    },[handleBackdropClick, handleKeyDown]);



    return createPortal(
        (isModal && (
            <ModalStyled onClick={handleBackdropClick}>
                <div className="booking-modal">
                    <button className="booking-close-button"
                        type="buttton" 
                        aria-expanded="false"
                        aria-controls="booking-close-button"
                        aria-label="Close Button"
                        onClick={closeModal} 
                    >
                        <CloseIcon className="modal-close-icon" width={30} height={30}/>
                    </button>
                    <address>
                        <ul className="contact-list">
                            <li className="contact-item">
                                <a  className="contact-link" 
                                    href={t('header.instagramLink')}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Instagram Contact Link"
                                    onClick={closeModal} 
                                >
                                    <Instagram className="icon" width={24} height={24}/>
                                    <p>{t('header.modalText')} Instagram</p>  
                                </a>
                            </li>
                            <li className="contact-item">
                                <a  className="contact-link" 
                                    href={whatsappUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp Contact Link"
                                    onClick={closeModal} 
                                >
                                    <WhatsApp className="icon" width={24} height={24}/>
                                    <p>{t('header.modalText')} WhatsApp</p>  
                                </a>
                            </li>
                            <li className="contact-item">
                                <a  className="contact-link" 
                                    href={t('header.telegramLink')}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Telegram Contact Link"
                                    onClick={closeModal} 
                                >
                                    <Telegram className="icon" width={24} height={24}/>
                                    <p>{t('header.modalText')} Telegram</p>  
                                </a>
                            </li>
                        </ul>
                    </address>
                </div>
            </ModalStyled>
        )),
        modalRoot
    );
}

