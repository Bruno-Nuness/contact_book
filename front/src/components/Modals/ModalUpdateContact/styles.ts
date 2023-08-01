import styled from "styled-components";

export const Container = styled.div`
  width: 43rem;
  height: 40rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-evenly;
    height: 88%;
  }
  input {
    padding: 10px;

    border-radius: 8px;
  }
  button {
    background-color: var(--color-orange-500);
    padding: 10px;
    border-radius: 8px;
  }
  button:hover {
    background-color: var(--color-blue-500);
    color: #ffffff;
    border: 2px solid black;

  }
  label {
    color: black;
    font-weight: bold;
  }
`;
