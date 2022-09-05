import styled from 'styled-components';

export const ProfileStyle = styled.div`
  height: 24px;
  width: 24px;
  display: grid;
  place-items: center;
  position: relative;
  
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profileBtn {
    display: none;
  }

  @media(min-width: 992px) {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      height: 40px;
      width: 40px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    div p {
      height: 20px;
      overflow: hidden;
    }

    div p:nth-child(1) {
      font-weight: 700;
    }

    div p:nth-child(2) {
      color: ${({ theme }) => theme.colors.placeholder}
    }

    .profileBtn {
      width: 75%;
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;