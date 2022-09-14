import styled from 'styled-components';

export const ProfileCardStyle = styled.section`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(min-width: 1200px) {
    width: 270px;
    height: 600px;
    border-radius: 30px;
    border: ${({ theme }) => theme.title === 'light' && `1px solid ${theme.colors.border}`};
  }
`;