import styled from 'styled-components';

export const ProfileOptionsStyle = styled.section`
  height: 100%;
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;

  button {
    display: flex;
    padding: 10px 0;
    align-items: center;
    background-color: transparent;
    border: none;
    background-color: transparent;
    color:  ${({ theme }) => theme.colors.text};
    font-size: 14px;
    font-weight: 600;
  }

  button svg {
    margin-right: 18px;
    font-size: 23px;
    background-color: transparent;
    color:  ${({ theme }) => theme.colors.iconNav};
  }
`; 