import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
   
    html,
    body {
        height: 100%;
        font-family: 'Rubik', "Raleway", "Italiana", sans-serif; 
        font-weight: 400;
        letter-spacing: 0.02em;
        color: ${(props) => props.theme.color.black};
        background-color: ${(props) => props.theme.color.white};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body.no-scroll {
        overflow: hidden;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    ul,
    ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    p {
        margin: 0;
    }

    *{
        box-sizing: border-box;
    }

    button {
        outline: none;
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
    }

    canvas {
        opacity: 0;
        touch-action: none;
        animation: fade-in 5s ease 2s forwards;
    }
    
    @keyframes fade-in {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

`;
