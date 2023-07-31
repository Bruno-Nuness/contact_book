import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --color-blue-500:#3D5AF1;
    --color-orange-500:#FF8156;
    --color-green-100:#53DE9F;
    --color-grey-100:#E2F3F5;
    --color-grey-200:#B2C0C3;
    --color-grey-800:#555D5E;
    --color-white-500:#ECF7F8;
    --color-red-500:#FF0000;
    --color-grey-300:#233039;
    font-size:60%;
}
@media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-grey-300);
    color: var(--color-white-500);
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
