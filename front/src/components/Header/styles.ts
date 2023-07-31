import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  background-color: var(--color-blue-500);
  color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  height: 10rem;
  align-items: center;
  margin-bottom: 4rem;
  .configurations {
    display: flex;
    gap: 3rem;
    height: 100%;
    align-items: end;
  }
  .logout-btn,
  .delete-btn {
    width: 18rem;
    padding: 9px;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    color: #ffffff
  }
  .logout-btn{
    background-color: var(--color-green-100);
  }
  .delete-btn{
    background-color: var(--color-orange-500);
  }
`;
