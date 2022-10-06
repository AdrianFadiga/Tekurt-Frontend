import styled from 'styled-components';

export const FriendsStyle = styled.section`
  margin: 55px 3%;

  h1 {
    width: 100%;
    text-align: center;
    padding: 20px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.8em;
  }

  .friends-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  @media(min-width: 750px) {
    margin: 50px 0;

    .friends-container {
      justify-content: flex-start;
    }    
  }

  @media(min-width: 1200px) {
    display: grid;
    place-items: center;
  }
`;