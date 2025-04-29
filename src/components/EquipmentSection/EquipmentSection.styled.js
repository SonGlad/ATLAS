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

            @media screen and (min-width: 768px){
                flex-direction: row;
                gap: calc(16px + (8 * ((100vw - 768px) / 672)));
            }
            
            &:nth-child(even) {
                margin-left: auto;
            }
        }

    }


    .equipment-img-cont{
        overflow: hidden;
        border-radius: 5px;
        border: 1px solid ${p => p.theme.color.black};
        width: 177px;
        height: 190px;
 

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
`