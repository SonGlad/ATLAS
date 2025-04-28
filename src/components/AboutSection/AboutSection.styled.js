import styled from "styled-components";


export const StyledAbout = styled.div`
    

    .about-title-cont{
        padding-top: 80px;
        display: flex;
        margin-bottom: 48px;


        @media screen and (min-width: 768px){
            padding-top: calc(80px + (40 * ((100vw - 768px) / 672)));
            margin-bottom: calc(48px + (16 * ((100vw - 768px) / 672)));
        }

        & .section-title{
            font-family: "Italiana", sans-serif; 
            font-weight: 400;
            font-size: 40px;
            color: ${p => p.theme.color.black};
            white-space: nowrap;

            @media screen and (min-width: 768px){
                font-size: calc(32px + (32 * ((100vw - 768px) / 672)));
            }
        }

        .title-undescore{
            border-bottom: 1px solid ${p => p.theme.color.black};
            width: 100%;
            margin-right: -16px;

            @media screen and (min-width: 768px){
                margin-right: calc(-40px + (-40 * ((100vw - 768px) / 672)));
            }
        }
    }




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

                @media screen and (min-width: 768px){
                    font-size: calc(14px + (6 * ((100vw - 768px) / 672)));
                }
            }


            .about-text-lower{
                font-size: 15px;

                @media screen and (min-width: 768px){
                    font-size: calc(15px + (8 * ((100vw - 768px) / 672)));  
                    
                }
            }
        }
    }

`