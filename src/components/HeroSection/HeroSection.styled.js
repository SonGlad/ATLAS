import styled from "styled-components";


export const StyledHero = styled.div`
    padding-top: 75px;


    @media screen and (min-width: 768px){
        padding-top: calc(72px + (9 * ((100vw - 768px) / 672)));
    }

    .hero-cont{
        margin-top: 48px;
        display: flex;
        flex-direction: column;
        gap: 48px;
        position: relative;
        z-index: 1;

        @media screen and (min-width: 768px){
            margin-top: calc(48px + (32 * ((100vw - 768px) / 672)));
            flex-direction: row-reverse;
        }
    }

    .hero-image-cont{
        margin-left: auto;
        border-radius: 5px;
        overflow: hidden;
        transform: translateY(25%);
        opacity: 0;
        transition: transform 1s ease 1s,
                    opacity 1s ease 1s;

        @media screen and (min-width: 768px){
            border-radius: 10px;
        }

        .hero-img{
            width: 340px;
            height: auto;

            @media screen and (min-width: 768px){
                width: calc(360px + (295 * ((100vw - 768px) / 672)));
                aspect-ratio: 1.185;
            }
        }
    }

    .active-hero-cont{
        opacity: 1;
        transform: translateX(0%);
    }

    .hero-button{
        background-color: ${p => p.theme.color.black};
        color: ${p => p.theme.color.white};
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 5px;
        font-family: "Italiana", sans-serif; 
        font-weight: 400;
        font-size: 20px;
        transform: translateY(50%);
        opacity: 0;
        transition: background-color ${p => p.theme.transition.main_transition},
                    transform 1s ease 1500ms,
                    opacity 1s ease 1500ms;

        &:hover{
            background-color: ${p => p.theme.color.hover_grey};
        }

        @media screen and (min-width: 768px){
            width: calc(160px + (138 * ((100vw - 768px) / 672)));
            margin-top: auto;
            margin-bottom: 24px;
            padding-top: calc(5px + (10 * ((100vw - 768px) / 672)));
            padding-bottom: calc(5px + (10 * ((100vw - 768px) / 672)));
            font-size: min(calc(16px + (4 * ((100vw - 768px) / 672))), 28px);
        }
    }

    .active-hero-btn{
        opacity: 1;
        transform: translateX(0%);
    }

    .hero-text-cont{
        position: absolute;
        top: 24px;
        left: 0;
        z-index: 2;
    }

    .hero-title{
        font-family: "Italiana", sans-serif; 
        font-weight: 400;
        font-size: 48px;
        color: ${p => p.theme.color.black};
        margin-bottom: 32px;
        transform: translateY(50%);
        opacity: 0;
        transition: transform 1s ease,
                    opacity 1s ease;

        @media screen and (min-width: 768px){
            font-size: min(calc(48px + (43 * ((100vw - 768px) / 672))), 200px);
        }
    }

    .active-hero-title{
        opacity: 1;
        transform: translateX(0%);
    }


    .hero-text{
        font-family: "Raleway", sans-serif; 
        font-weight: 300;
        font-size: 14px;
        line-height: 150%;
        color: ${p => p.theme.color.black};
        max-width: 310px;
        transform: translateY(50%);
        opacity: 0;
        transition: transform 1s ease 500ms,
                    opacity 1s ease 500ms;

        @media screen and (min-width: 768px){
            font-size: min(calc(12px + (11 * ((100vw - 768px) / 672))), 50px);
            max-width: calc(280px + (225 * ((100vw - 768px) / 672)));
        }
    }

    .active-hero-text{
        opacity: 1;
        transform: translateX(0%);
    }
`