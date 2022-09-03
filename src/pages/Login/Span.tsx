import styled from 'styled-components';

export const Span = styled.span`
  font-size: ${({ theme }) => theme.sizes.small};
  text-align: center;
  color: ${({ theme }) => theme.colors.placeholder};

  a {
    all: unset;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  .btn-register {
    border: none;
    color: ${({ theme }) => theme.colors.secondary };
    cursor: pointer;
  }

  .btn-register:hover {
    text-decoration: underline;
  }
`;