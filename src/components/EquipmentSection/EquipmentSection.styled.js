import styled from "styled-components";


export const StyledEquipment = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1440px){
        display: block;
    }


    .equipment-list{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        column-gap: 16px;
        width: 100%;
        max-width: 370px;
        margin-left: auto;
        margin-right: auto;

        @media screen and (min-width: 768px){
            max-width: none;
            width: 100%;
            gap: calc(16px + (8 * ((100vw - 768px) / 672)));  
        }


        & .equipment-item{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            transform-style: preserve-3d;
            transform: perspective(100rem);
            cursor: pointer;
            opacity: 0;
            visibility: hidden;

            @media screen and (min-width: 768px){
                flex-direction: row;
                gap: calc(16px + (8 * ((100vw - 768px) / 672)));
            }
            
            &:nth-child(even) {
                margin-left: auto;
            }
        }

        & .active-equipment-item{
            opacity: 0;
            visibility: hidden;
            animation: slideLinkTop 0.9s ease forwards;
            animation-delay: calc(0.3s * var(--i));
        }

    }

    @keyframes slideLinkTop {
        0%{
            visibility: hidden;
            opacity: 0;
            transform: translateY(75px);
        }
        100%{
            visibility: visible;
            opacity: 1;
            transform: translateY(0px);
        }
    }


    .equipment-img-cont{
        --rX: 0;
        --rY: 0;
        --bX: 50%;
        --bY: 80%;

        overflow: hidden;
        border-radius: 5px;
        border: 1px solid ${p => p.theme.color.black};
        width: 177px;
        height: 190px;
        position: relative;
        transform: rotateX(calc(var(--rX) * 1deg)) rotateY(calc(var(--rY) * 1deg));
        background-position: var(--bX) var(--bY);
        transition: transform .6s 1s;
 

        @media screen and (min-width: 768px){
            width: calc(177px + (125 * ((100vw - 768px) / 672)));
            height: calc(190px + (137 * ((100vw - 768px) / 672)));
        }


        & .equipment-img{
            width: 100%;
            height: auto;
            transform: scale(1.015);

            @media screen and (min-width: 768px){
                width: calc(177px + (125 * ((100vw - 768px) / 672)));  
                aspect-ratio: 0.9235;
            }
        }
    }

    .container--active {
        transition: none;
    }
`