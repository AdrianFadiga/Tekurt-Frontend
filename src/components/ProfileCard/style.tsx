import styled from 'styled-components';

interface Props {
  username: boolean
}

export const ProfileCardStyle = styled.section<Props>`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${(props) => props.username ? '20px 40px 40px' : '40px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    display: flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    position: relative;
    width: min-content;
    margin-left: 90%;
  }

  label svg {
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
  }

  .btns-edit-section, .checkbox, .empty-block {
    display: none;
  }

  input:checked ~ .btns-edit-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 3;
    top: 15px;
    width: 160px;
    height: 70px;
    border-radius: 10px;
  }

  .btns-edit-section button {
    border: none;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
  }

  .btns-edit-section button:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  .btns-edit-section button:disabled {
    color: gray;
    cursor: not-allowed;
  }

  input:checked ~ .empty-block {
    display: block;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 2;
    background-color: transparent;
  }  

  @media(min-width: 1200px) {
    width: 270px;
    height: 600px;
    border-radius: 30px;
    border: ${({ theme }) => theme.title === 'light' && `1px solid ${theme.colors.border}`};
  }
`;