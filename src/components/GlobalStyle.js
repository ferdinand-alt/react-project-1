import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: rebeccapurple;
}

button {
    font-weight: bold;
    font-size: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    padding: 1rem 0.5rem;
    &:hover {
        background: #23d997;
        color: white;
    }
}

h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
h3 {
        color: white;
    }
h4 {
    font-weight: bold;
    color: white;
}
span {
    font-weight: bold;
    color: blueviolet;
}
a {
    font-size: 1.1rem;
}
p {
        padding: 3rem 0rem;
        color: #CCC;
        font-size: 1.4rem;
        line-height: 150%; 
    }
`;

export default GlobalStyle;