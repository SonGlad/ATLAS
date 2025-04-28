import { createPortal } from "react-dom";
import { ModalStyled } from "./Modal.styled";
import { useEffect, useCallback} from "react";
import CloseIcon from "../../assets/svg/close.svg";


const modalRoot = document.querySelector("#modal-root");


export const Modal = ({isModal, closeModal}) => {


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
                </div>
            </ModalStyled>
        )),
        modalRoot
    );
}

