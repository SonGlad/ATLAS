import { styled } from "styled-components";


export const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 100;

    .booking-modal{
        width: 90%;
        background-color: ${p => p.theme.color.white};
        position: relative;
        border-radius: 10px;
        padding: 40px 24px 40px 24px;
        overflow: auto;

        @media screen and (min-width: 768px){
            padding: 80px 48px 80px 48px;
            max-width: 806px;
        }
    }

    .booking-close-button{
        position: absolute;
        top: 5px;
        right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        @media screen and (min-width: 768px){
            top: 18px;
            right: 18px;
        }

        & .modal-close-icon{
            fill: ${(props) => props.theme.color.black};
            width: 30px;
            height: 30px;
        }
    }


    .contact-list{
        font-style: normal;
   

        & .contact-item{
            padding-top: 15px;
            padding-bottom: 15px;
            border: 1px solid ${p => p.theme.color.black};
            border-radius: 5px;
            margin-bottom: 24px;
            
            
            & .contact-link{
                padding-top: 10px;
                padding-bottom: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                color: ${p => p.theme.color.black};
                text-transform: uppercase;
                letter-spacing: 0;
                fill: ${p => p.theme.color.black};
                transition: color ${p => p.theme.transition.main_transition},
                            fill ${p => p.theme.transition.main_transition};


                &:hover{
                    fill: ${p => p.theme.color.hover_grey};
                    color: ${p => p.theme.color.hover_grey};   
                }

                & .icon{
                    width: 24px;
                    height: 24px;
                } 

                & p{
                    font-family: "Italiana", sans-serif; 
                    font-weight: 600;
                    font-size: 16px;

                    @media screen and (min-width: 768px){
                        font-size: 20px;
                    }
                }
            }
    
            &:last-child {
                margin-bottom: 0;
            }
        }
        }
`