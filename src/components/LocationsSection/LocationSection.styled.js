import styled from "styled-components";


export const StyledLocations = styled.div`


    .location-list{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        @media screen and (min-width: 768px){
            flex-direction: row;
            justify-content: space-around;
            gap: 0;
        }

        
        @media screen and (min-width: 1440px){
            
        }

        & .location-name{
            margin-bottom: 24px;
            font-family: "Italiana", sans-serif;
            font-weight: 400;
            font-size: 36px;
            color: ${p => p.theme.color.black};


            @media screen and (min-width: 768px){
                font-size: calc(28px + (20 * ((100vw - 768px) / 672)));
                margin-bottom: calc(24px + (16 * ((100vw - 768px) / 672)));
            }

        }

        & .location-img-cont{
            border-radius: 5px;
            overflow: hidden;

            & .location-image{
                width: 370px;
                height: auto;

                @media screen and (min-width: 768px){
                    width: calc(300px + (110 * ((100vw - 768px) / 672)));
                    aspect-ratio: 0.664;
                }
            }
        }
    }
`