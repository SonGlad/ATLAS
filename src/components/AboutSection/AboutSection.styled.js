import styled from "styled-components";


export const StyledAbout = styled.div`


    .about-content-block{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 768px){
            flex-direction: row;
            justify-content: flex-start;
        }
      
        
        & .about-image-cont{
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 64px;
            transform: translateY(50%);
            opacity: 0;
            transition: transform 1s ease,
                        opacity 1s ease;

            @media screen and (min-width: 768px){
                margin-bottom: 0;   
            }

            & .about-img{
                width: 370px;
                height: auto;

                @media screen and (min-width: 768px){
                    width: calc(300px + (111 * ((100vw - 768px) / 672)));
                    aspect-ratio: 0.81;
                }
            }
        }

        & .active-about-image-cont{
            opacity: 1;
            transform: translateX(0%);
        }




        & .about-text-cont{


            @media screen and (min-width: 768px){
                margin-top: auto;
                max-width: calc(350px + (250 * ((100vw - 768px) / 672)));
                margin-left: calc(40px + (92 * ((100vw - 768px) / 672)));
            }


            .about-text-above,
            .about-text-lower{
                font-family: "Raleway", sans-serif; 
                font-weight: 300;
                line-height: 150%;
                color: ${p => p.theme.color.black};
            }
            
            .about-text-above{
                text-transform: lowercase;
                font-size: 14px;
                margin-bottom: 18px;
                transform: translateY(50%);
                opacity: 0;
                transition: transform 1s ease 500ms,
                            opacity 1s ease 500ms;

                @media screen and (min-width: 768px){
                    font-size: calc(14px + (6 * ((100vw - 768px) / 672)));
                }
            }

            
            .active-about-text-above{
                opacity: 1;
                transform: translateX(0%);
            }


            .about-text-lower{
                font-size: 15px;
                transform: translateY(50%);
                opacity: 0;
                transition: transform 1s ease 1s,
                            opacity 1s ease 1s;

                @media screen and (min-width: 768px){
                    font-size: calc(15px + (8 * ((100vw - 768px) / 672)));  
                }
            }

            .active-about-text-lower{
                opacity: 1;
                transform: translateX(0%);
            }
        }
    }

`