import styled from 'styled-components';

export const SearchStyle = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
  background-color: transparent;

  input {
    width: 50px;
    display: none;
  }

  button {
    all: unset;
  }

  @media(min-width: 992px) {
    .input {
      height: 60px;
      width: 100%;
      border-radius: 30px;
      border: 1px solid ${({ theme }) => theme.colors.border};
    }

    .input svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 17px;
    }

    input {
      display: block;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 30px;
      padding-left: 55px;
      padding-right: 20px;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.text}
    }

    input:focus {
      outline: none;
    }
  }
`;