import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
     background-color: #fff;
    }
  }
`;
