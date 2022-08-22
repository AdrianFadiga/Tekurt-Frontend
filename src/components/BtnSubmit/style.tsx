import styled from 'styled-components';

export const BtnStyle = styled.button`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 30px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.alertText};
  font-size: ${({ theme }) => theme.sizes.small};
  cursor: pointer;
`;