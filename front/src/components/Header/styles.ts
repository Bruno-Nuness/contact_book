import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  background-color: var(--color-blue-500);
  color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-bottom: 4rem;
  padding: 1rem;
  .configurations {
    display: flex;
    gap: 3rem;
    height: 100%;
    align-items: end;
  }
  .logout-btn,
  .delete-btn {
    width: 10rem;
    padding: 9px;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    color: #ffffff;
  }
  .logout-btn {
    background-color: var(--color-green-100);
    height: 5.4rem;
  }
  .delete-btn {
    background-color: var(--color-orange-500);
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

  @media (min-width: 768px) {
    height: 10rem;
    .logout-btn,
    .delete-btn {
      width: 18rem;
    }
    .logout-btn {
      height: 3.5rem;
    }
  }
`;
