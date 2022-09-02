import styled from 'styled-components';

export const LoginStyle = styled.main`
  height: 100vh;
  display: flex;
  width: 100%;
  align-items: center;

  .cardLogin {
    height: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
  }

  span:nth-of-type(2) {
    padding: 10px;
    color: ${({ theme }) => theme.colors.placeholder};
    width: 100%;
  }

  @media(min-width: 500px) {
    .cardLogin {
      height: 600px;
      width: 500px;
      padding: 38px;
      border-radius: 30px;
      margin: 0 auto;
      box-shadow: -1px 0px 11px -1px #0000003d;
  }
  }
`;