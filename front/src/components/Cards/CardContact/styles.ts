import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-blue-500);
  width: 26rem;

  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  .title {
    font-size: 2.5rem;
  }
  .email {
    color: var(--color-grey-200);
    font-weight: bold;
  }
  .date {
    font-size: 1.5rem;
  }
  .contact {
    font-weight: 900;
    letter-spacing: 3px;
  }
  .img-box {
    width: 50%;
    height: 50%;
  }
  .img-box img {
    width: 100%;
    height: 100%;
  }
  .informations-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .box-img-informations {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    border-radius: 10%;
  }

  .btn-box {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
  }
  .update-btn,
  .delete-btn {
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
  .delete-btn {
    background-color: var(--color-red-500);
  }
  @media (min-width: 768px) {
    .box-img-informations {
      display: flex;
      gap: 2rem;
      align-items: center;
      flex-direction: unset;
      justify-content: center;
    }
    .update-btn,
    .delete-btn {
      margin-bottom: 0.9rem;
      border-radius: 8px;
      border: none;
      font-weight: bold;
      color: #ffffff;
    }
    .img-box {
      height: 100%;
    }
    .informations-box {
      gap: 6px;
    }
    .img-box img {
      border-radius: 12%;
    }
    .date {
      font-size: 1.1rem;
    }
  }
`;
