import styled from "styled-components";


export const StyledNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
    }


    .mob-logo-item{
        margin-left: auto;
        margin-right: auto;
    }

    .navigation-list{
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        gap: 70px;
        padding-left: 67px;
        font-family: "italiana", sans-serif;
        font-weight: 400;
        font-size: 24px;

        @media screen and (min-width: 768px){
            margin-top: 0;
            padding-left: 0;
            flex-direction: row;
            align-items: flex-end;
            font-family: "Raleway", sans-serif;
            font-weight: 400;
            gap: 25px;
            font-size: min(calc(16px + (4 * ((100vw - 768px) / 672))), 26px);
        }
    }

    .navigation-item:not(.logo-item){
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

    .logo-item{
        cursor: pointer;

        &:hover .mob-logo-item .header-logo{
            fill: ${p => p.theme.color.hover_grey};
            transition: fill ${p => p.theme.transition.main_transition};
        }
    }

    .nav-link{
        white-space: nowrap;
    }

    .underscore{
        border-bottom: 1px solid ${p => p.theme.color.black};
        width: 100%;
    }

`