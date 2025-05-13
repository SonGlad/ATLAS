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

        .location-name{
            margin-bottom: 24px;
            font-family: "Italiana", sans-serif;
            font-weight: 400;
            font-size: 36px;
            color: ${p => p.theme.color.black};
            transform: translateY(100%);
            opacity: 0;
            transition: transform 1s ease,
                        opacity 1s ease;


            @media screen and (min-width: 768px){
                font-size: calc(28px + (20 * ((100vw - 768px) / 672)));
                margin-bottom: calc(24px + (16 * ((100vw - 768px) / 672)));
            }

        }

        .active-location-name{
            opacity: 1;
            transform: translateX(0%);
        }

        .location-img-cont{
            border-radius: 5px;
            overflow: hidden;
            transform: translateY(25%);
            opacity: 0;
            transition: transform 1s ease 500ms,
                        opacity 1s ease 500ms;

            & .location-image{
                width: 370px;
                height: auto;

                @media screen and (min-width: 768px){
                    width: calc(300px + (110 * ((100vw - 768px) / 672)));
                    aspect-ratio: 0.664;
                }
            }
        }

        .active-location-img-cont{
            opacity: 1;
            transform: translateX(0%);
        }
    }

    
    #locations{
        position: relative;
        width: 100%;
        height: 1200px;
        border-radius: 10px;
        overflow: hidden;
        max-width: 402px;
        margin-left: auto;
        margin-right: auto;

        @media screen and (min-width:768px){
            max-width: none;
            height: calc(500px + (200 * ((100vw - 768px) / 672)));
        }
    }
`