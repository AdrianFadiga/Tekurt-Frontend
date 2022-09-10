import styled from 'styled-components';

export const ProfileCardStyle = styled.section`
  margin-top: 140px;
  width: 270px;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;