import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    border-radius: 8px;
    background-color: var(--color-green-100);

    padding: 20px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
  }
`;
