import styled from 'styled-components';

export const ProfileContainerStyle = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 22px;

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