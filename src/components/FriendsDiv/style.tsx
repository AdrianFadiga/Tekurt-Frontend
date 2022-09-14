import styled from 'styled-components';

export const FriendsStyle = styled.section`
  width: 320px;
  border-radius: 30px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: min-content;
  height: 450px;
  max-height: 450px;

  .titleSection {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 18px;
    background-color: transparent;
  }

  .titleSection a, h1 {
    background-color: transparent;
  }

  .titleSection h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }

  .titleSection a {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 10px;
    text-decoration: none;
  }

  .acceptedFriends {
    display: grid;
    grid-template-rows: 105px 105px 105px;
    grid-template-columns: 72px 72px 72px;
    width: 100%;
    height: 90%;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 15px;
    background-color: transparent;
  }

  .acceptedFriends .ellipsis {
    width: 72px;
    height: 90px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 30px;
    text-align: center;
    display: grid;
    place-items: center;
    background-color: transparent;
  }
`;