import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-blue-500);
  width: 26rem;
  /* height: 18rem; */
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
  .btn-box {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
  }
  .update-btn,
  .delete-btn {
    width: 18rem;
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
    background-color: var(--color-green-100);
  }
`;
