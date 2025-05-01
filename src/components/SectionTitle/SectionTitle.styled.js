import styled from "styled-components";


export const StyledTitle = styled.div`
    padding-top: 80px;
    display: flex;
    margin-bottom: 48px;


    @media screen and (min-width: 768px){
        padding-top: calc(80px + (40 * ((100vw - 768px) / 672)));
        margin-bottom: calc(48px + (16 * ((100vw - 768px) / 672)));
    }

    .section-title{
        font-family: "Italiana", sans-serif; 
        font-weight: 400;
        font-size: 40px;
        color: ${p => p.theme.color.black};
        white-space: nowrap;
        transform: translateY(50%);
        opacity: 0;
        transition: transform 1s ease,
                    opacity 1s ease;

        @media screen and (min-width: 768px){
            font-size: calc(32px + (32 * ((100vw - 768px) / 672)));
        }
    }

    .active-section-title{
        opacity: 1;
        transform: translateX(0%);
    }

    .title-undescore{
        border-bottom: 1px solid ${p => p.theme.color.black};
        width: 100%;
        margin-right: -16px;
        transform: translateY(50%);
        opacity: 0;
        transition: transform 1s ease 250ms,
                    opacity 1s ease 250ms;

        @media screen and (min-width: 768px){
            margin-right: calc(-40px + (-40 * ((100vw - 768px) / 672)));
        }
    }

    .active-title-underscore{
        opacity: 1;
        transform: translateX(0%);
    }
`