import styled from 'styled-components';

export const ProfileContainerStyle = styled.div`
  border: 1px solid red;
  background-color: ${({ theme }) => theme.colors.background};

  img {
    width: 132px;
    height: 132px;
    padding: 6px;
    border-radius: 50%;
    border: 2px solid blue;
    object-fit: cover;
  }
`;