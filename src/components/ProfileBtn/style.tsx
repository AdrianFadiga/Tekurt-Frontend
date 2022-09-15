import styled from 'styled-components';

export const ProfileStyle = styled.div`
  height: 24px;
  width: 24px;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 1;
  
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .profileBtn {
    display: none;
  }

  @media(min-width: 1200px) {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      height: 30px;
      width: 30px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      cursor: pointer;
    }

    div p {
      height: 100%;
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

    svg {
      cursor: pointer;
    }
  }
`;