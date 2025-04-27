import styled from "styled-components";


export const StyledHeader = styled.header `
    padding-top: 40px;
    position: fixed;
    background-color: ${p => p.theme.color.white};
    width: 100%;

    .header-mobile{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;


        @media screen and (min-width: 768px){
            flex-direction: row-reverse;
        }
    }

    .lang-button-item{
        position: relative;        
        font-family: "Raleway", sans-serif; 
        font-weight: 400;
        font-size: 20px;

        @media screen and (min-width: 768px){
            font-size: min(calc(16px + (4 * ((100vw - 768px) / 672))), 26px);
        }
    }

    .lang-button{
        border-radius: 5px;
        border: 1px solid ${p => p.theme.color.black};
        padding: 5px;

        &:hover{
            color: ${p => p.theme.color.white};
            background-color: ${(props) => props.theme.color.hover_grey};
            transition: color ${p => p.theme.transition.main_transition},
                        background-color ${p => p.theme.transition.main_transition};
        }
    }

    .lang-drop-list{
        position: absolute;
        top: 100%;
        left: 0;
        border-radius: 5px;
        overflow: hidden;
        transform: scale(0);
        transform-origin: top;
        transition: transform ${p => p.theme.transition.main_transition};
        border: 1px solid ${(p) => p.theme.color.black};
        max-width: 100%;
        padding: 0;
    }

    .lang-drop-item{
        padding: 5px;
        width: 100%;
        background-color: pink;
        background-color: ${(props) => props.theme.color.white};
        color: ${(p) => p.theme.color.black};
        transition: background-color ${(p) => p.theme.transition.main_transition};
        border-top: 1px solid ${(p) => p.theme.color.black};

        cursor: pointer;
        
        &:hover{
            color: ${p => p.theme.color.white};
            background-color: ${(props) => props.theme.color.hover_grey};
            transition: color ${p => p.theme.transition.main_transition},
                        background-color ${p => p.theme.transition.main_transition};
        }

        &:first-child{
            border-top: none;
        }
    }

    .visible{
        transform: scale(1);
    }

    .header-logo{
        width: 65px;
        height: 30px;
        fill: ${p => p.theme.color.black};

        @media screen and (min-width: 768px){
            width: calc(80px + (20 * ((100vw - 768px) / 672)));
            aspect-ratio: 2.27;
            height: auto;
        }
    }

    .burger-button{
        width: 30px;
        height: 30px;
        stroke: ${p => p.theme.color.black};
    }



    .mobile-menu{
        top: 0;
        right: 0;
        position: absolute;
        height: 640px;
        z-index: 999;
        width: calc(100vw - 24px);
        padding: 24px 0 0 0; 
        background-color: ${(props) => props.theme.color.white};
        transform: translateX(100%);
        transition: transform ${p => p.theme.transition.main_transition};

        & .mobile-close-button{
            position: absolute;
            top: 24px;
            right: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
    
            & .close-icon{
                fill: ${(props) => props.theme.color.black};
                width: 30px;
                height: 30px;
            }
        }
    }

    .is-mob-menu-active{
        transform: translateX(0);
    }




`