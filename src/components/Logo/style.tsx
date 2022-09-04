import styled from 'styled-components';

interface Props {
  navbar?: boolean
}

export const LogoStyle = styled.div<Props>`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  font-size: ${({ navbar, theme }) => navbar ? theme.sizes.medium : theme.sizes.xxLarge };
  text-align: center;
`;