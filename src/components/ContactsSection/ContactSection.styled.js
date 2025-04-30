import styled from "styled-components";


export const StyledContacts = styled.div`
    display: flex;
    flex-direction: column;
 
    @media screen and (min-width: 768px){
        display: block;
    }

    .adress-block{
        margin-left: auto;
        margin-right: auto;

        @media screen and (min-width: 768px){
            display: flex;
            gap: 25px;
        }


        & .google-map-cont{
            width: calc(318px + (54 * ((100vw - 350px) / 52)));
            max-width: 370px;
            aspect-ratio: 1.135;
            border-radius: 5px;
            border: 1px solid black;
            overflow: hidden;
            margin-bottom: 32px;

            @media screen and (min-width: 768px){
                margin-bottom: 0;
                max-width: none;
                width: calc(370px + (149 * ((100vw - 768px) / 672)));
                aspect-ratio: 1.138;
            }
        }


        & .adress-cont{
            font-style: normal;
            font-family: "Raleway", sans-serif; 
            font-weight: 300;
            font-size: 16px;
            line-height: 150%;

            @media screen and (min-width: 768px){
                margin-top: auto;
                font-size: calc(16px + (8 * ((100vw - 768px) / 672)));
            }

  
            & .adress-item {
                margin-bottom: 24px;
                color: ${p => p.theme.color.black};

                &:last-child {
                    margin-bottom: 0;
                }

                & .address-link{
                    color: ${p => p.theme.color.black};
                    transition: color ${p => p.theme.transition.main_transition};

                    &:hover{
                     color: ${p => p.theme.color.hover_grey}
                    }
                }

            }

        }
    }
`