import styled from 'styled-components';

export const LogoStyle = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  font-size: 23px;
  text-align: center;

  @media(min-width: 1200px) {
    font-size: ${({ theme }) => theme.sizes.xxLarge };
  }
`;