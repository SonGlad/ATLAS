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
        width: 50%;
        background-color: ${p => p.theme.color.white};
        position: relative;
        border-radius: 20px;
        padding: 30px 10px 30px 10px;
        overflow: auto;
        height: 400px;
    }

    .booking-close-button{
        position: absolute;
        top: 24px;
        right: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        & .modal-close-icon{
            fill: ${(props) => props.theme.color.black};
            width: 30px;
            height: 30px;
        }
    }
`