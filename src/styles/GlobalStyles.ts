import { createGlobalStyle } from 'styled-components';
import { GothamFontFace } from "./Fonts";

export const GlobalStyle = createGlobalStyle`
  ${GothamFontFace};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *, button, input {
    font-family: 'Gotham-Bold', 'Gotham-Book';
    color: var(--text-color);
    outline:none;
    border: none;

    background: none;
  }
  ul{
    list-style: none;
  }

  html, body {
    background: var(--background);
    height: 100vh;   
  }
  
  :root{
    --background: #FAFBFF;
    --blue: #117EFF;
    --input-color: #CCCFDE;
    --white-light: #FFFFFF;
    --box-lighter: #EBEEF6;
    --search-hover: #B5B5B5;
    --text-color: #3E4157;
    --side-bar: #1A1731;
    --icons-white: #E4E6F1;
    --text-modal:#c5c8d1;
    --span-modal: #b0b1b4;
    --text-lighter: #9196AB;
    
  }
`;
