import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--color-blue-500);
  display: flex;
  flex-direction: column;
  color: #ffffff;
  width: 35rem;
  height: 43rem;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;

  .profile-box {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile-box img {
    width: 60%;
    height: 80%;
  }
  .update-btn,
  .new-btn {
    width: 22rem;
    padding: 9px;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    color: #ffffff;
  }
  .update-btn {
    background-color: var(--color-orange-500);
  }
  .new-btn {
    background-color: var(--color-green-100);
  }
`;
