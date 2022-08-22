import styled from 'styled-components';

export const LoginStyle = styled.main`
  height: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media(min-width: 500px) {
    width: 500px;
    padding: 38px 70px;
    border-radius: 30px;
    margin: 0 auto;
    box-shadow: -1px 0px 11px -1px #0000003d;
  }
`;