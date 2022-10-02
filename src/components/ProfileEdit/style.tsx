import styled from 'styled-components';

export const EditProfileContainerStyle = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 22px;
  margin-bottom: -36px;

  .inputs-edit {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
  }

  .buttons-edit {
    display: flex;
    justify-content: space-between;
    background-color: transparent;
  }

  .buttons-edit button {
    width: 45%;
    font-size: 12px;
    margin-top: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 7px 0;
    border-radius: 2px;
    color: white;
    cursor: pointer;
  }

  .inputs-edit button:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    color: ${({ theme }) => theme.colors.text};
  }

  input {
    display: block;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    padding: 5px 2px;
    margin: 2px 0;
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  }

  img {
    width: 150px;
    height: 150px;
    padding: 6px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    object-fit: cover;
    margin-bottom: 18px;
  }

  p {
    line-height: 25px;
    background-color: transparent;
  }

  .name-user {
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }

  .name-user p {
    height: 25px;
    text-align: center;
    width: 100%;
  }

  .username {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    font-size: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  @media(min-width: 1200px) {
    img {
      width: 132px;
      height: 132px;
    }    
  }
`;