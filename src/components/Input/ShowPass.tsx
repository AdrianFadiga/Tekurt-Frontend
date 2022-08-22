import styled from 'styled-components';

export const ShowPass = styled.button`
  background-color: blue;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    color: ${({ theme }) => theme.colors.placeholder};
    position: absolute;
    font-size: 150%;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all ease 0.1s;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;