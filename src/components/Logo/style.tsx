import styled from 'styled-components';

export const LogoStyle = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.xxLarge};
  text-align: center;
`;