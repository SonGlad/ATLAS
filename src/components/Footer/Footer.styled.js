import styled from "styled-components";


export const StyledFooter = styled.footer`

    .footer-container{
        padding-top: 80px;
        padding-bottom: 40px;
    }

    .mobile-render{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
    }

    .footer-logo{
        width: 100px;
        height: 44px;
        fill: ${p => p.theme.color.black};
        transition: fill ${p => p.theme.transition.main_transition};
        cursor: pointer;

        &:hover{
            fill: ${p => p.theme.color.hover_grey};
        }

        @media screen and (min-width: 768px){
            width: calc(80px + (20 * ((100vw - 768px) / 672)));
            aspect-ratio: 2.27;
            height: auto;
        }
    }


    .footer-contact-list{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;

        @media screen and (min-width: 768px){
            gap: calc(28px + (4 * ((100vw - 768px) / 672)));
        }

        & .footer-contact-link{
            display: flex;
            align-items: center;
            justify-content: center;
            fill: ${p => p.theme.color.black};
            transition: fill ${p => p.theme.transition.main_transition};

            &:hover{
                fill: ${p => p.theme.color.hover_grey};
            }

            & .footer-icon{
                width: 24px;
                height: 24px;
            }
        }
    }



    .footer-nav{

        @media screen and (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: center;
            gap: calc(44px + (4 * ((100vw - 768px) / 672)));
        }
    }

    .footer-nav-list{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        font-size: 15px;

        @media screen and (min-width: 768px){
            gap: 18px;
            font-size: calc(15px + (5 * ((100vw - 768px) / 672)));
        }
    }

    .footer-nav-item{
        display: flex;

        @media screen and (min-width: 768px){
            cursor: pointer;
            position: relative;
    
            &:hover .nav-link span{
                color: ${p => p.theme.color.hover_grey};
            }

            &:after{
                position: absolute;
                left: 0;
                content: '';
                width: 100%;
                height: 2px;
                bottom: -2px;
                background-color: ${p => p.theme.color.hover_grey};
                transform-origin: right;
                transform: scaleX(0);
                transition: transform ${p => p.theme.transition.main_transition}; 
            }

            &:focus::after,
            &:hover::after {
                transform-origin: left;
                transform: scaleX(1);
            }
        }
    }

    .footer-nav-link{
        white-space: nowrap;
    }
`