import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--color-blue-500);
  display: flex;
  flex-direction: column;
  color: #ffffff;
  width: 80%;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  .profile-box {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .container-box {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .informations-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 6px;
    align-items: center;
  }
  .profile-box img {
    width: 60%;
    height: 80%;
  }
  .update-btn,
  .new-btn {
    width: 70%;
    padding: 9px;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    color: #ffffff;
  }
  .email {
    color: var(--color-grey-200);
  }

  .update-btn {
    background-color: var(--color-orange-500);
  }
  .new-btn {
    background-color: var(--color-green-100);
  }
  @media (min-width: 768px) {
    width: 50rem;
    height: 23rem;
    border-radius: 10px;

    flex-direction: initial;
    .profile-box {
      width: 100%;
      height: 89%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
