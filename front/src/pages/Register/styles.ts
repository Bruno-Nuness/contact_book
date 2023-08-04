import styled from "styled-components";

export const Container = styled.div`
  top: 0;

  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > .container-register {
    background-color: var(--color-blue-500);
    padding: 20px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
 
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    width: 100%;

    > label {
      font-weight: bold;
    }
  }
  .btn-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .enter-btn {
    background-color: var(--color-green-100);
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    color: #ffffff;
    width: 60%;
  }
  .contact {
    font-weight: bold;
    color: var(--color-green-100);
    font-family: "Courier New", Courier, monospace;
  }

  .book {
    color: var(--color-orange-500);
    font-weight: bold;
    font-family: "Courier New", Courier, monospace;
  }
  input {
    padding: 10px;
    border-radius: 8px;
    border: none;
  }
  h1 {
    margin-bottom: 2rem;
  }
  a {
    color: var(--color-orange-500);
  }
  .login-return {
    margin-top: 17px;
  }
  @media (min-width: 768px){
    .container-register{
      width: 35%;
    }
  };
`;
