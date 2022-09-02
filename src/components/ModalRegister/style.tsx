import styled from 'styled-components';

export const ModalStyle = styled.section`
  position: absolute;
  margin: 0;

  .close-btn {
    all: unset;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;