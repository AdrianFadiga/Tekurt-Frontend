import styled from 'styled-components';

export const FormStyle = styled.form`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  span {
    position: absolute;
    bottom: 75px;
    font-size: ${({ theme }) => theme.sizes.small};
    font-style: italic;
    color: ${({ theme }) => theme.colors.alert};
    width: 100%;
    text-align: center;
    transition: 0.1s ease-in-out all;
  }
`;