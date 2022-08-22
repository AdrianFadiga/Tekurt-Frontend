import styled from 'styled-components';

interface Props {
  invalidField: boolean;
}

export const InputStyle = styled.section<Props>`
  position: relative;

  input {
    width: 100%;
    padding: 21px 30px;
    border: 1px solid ${props => props.invalidField ? props.theme.colors.alert : props.theme.colors.border};
    border-radius: 30px;
    font-size: ${({ theme }) => theme.sizes.small};
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    transition: 0.1s ease;
    color: ${({ theme }) => theme.colors.text}
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderFocus};
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;