import styled from 'styled-components';

export const RegisterStyle = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  z-index: 3;

  section:nth-last-of-type(1) {
    display: flex;
    justify-content: space-between;
  }

  section:nth-last-of-type(1) button {
    width: 48%;
    border-radius: 30px;
    cursor: pointer;
  }

  section:nth-last-of-type(1) button:nth-child(1) {
    background-color: #333;
    border: none;
    color: ${({ theme }) => theme.colors.text };
  }

  @media(min-width: 600px) {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    padding: 20px;
    border-radius: 30px;
    margin: 0 auto;
    box-shadow: -1px 0px 11px -1px #0000003d;
  }
`;
