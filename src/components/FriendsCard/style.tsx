import styled from 'styled-components';

export const FriendsCardStyle = styled.section`
  height: 90px;
  margin-bottom: 15px;
  background-color: transparent;

  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    height: 100%;
    background-color: transparent;
  }
  
  p {
    width: 72px;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    background-color: transparent;
  }
`;