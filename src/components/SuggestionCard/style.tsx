import styled from 'styled-components';

export const SuggestionCardStyle = styled.section`
  border-radius: 10px;
  box-shadow: -1px 0px 11px -1px #0000003d;
  width: 220px;
  height: 40vh;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};

  .image-profile {
    height: 60%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .section-user {
    background-color: transparent;
    padding: 8px;
    height: 15%;
  }

  .username {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.4em;
    font-weight: 600;
    background-color: transparent;
  }

  .fullname {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.placeholder};
  }

  .section-invite {
    background-color: transparent;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px;
  }

  .section-invite button {
    border-radius: 5px;
    border: none;

    padding: 10px 5px;
    cursor: pointer;
  }

  .undo-invite {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    color: black;
  }

  .send-invite {
    color: white;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media(min-width: 700px) {
    margin: 0 10px;
    margin-bottom: 20px;

        
  }
`;