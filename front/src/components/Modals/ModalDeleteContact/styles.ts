import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  justify-content: center;
  align-items: center;

  h1 {
    color: black;
    font-weight: bold;
  }
  button {
    background-color: var(--color-orange-500);
    padding: 10px;
    border-radius: 8px;
    font-weight: bold;
    width: 80%;
  }
  span {
    color: var(--color-orange-500);
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
  }
`;
