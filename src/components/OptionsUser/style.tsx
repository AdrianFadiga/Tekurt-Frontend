import styled from 'styled-components';

export const OptionsStyle = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};

  div:nth-child(1) {
    position: fixed;
    width: 100%;
    height: 52px;
    padding: 6px 4px;
    display: flex;
    align-items: center;
    -webkit-box-shadow: 1px 5px 8px -1px rgba(0,0,0,0.23); 
    box-shadow: 1px 5px 8px -1px rgba(0,0,0,0.23);
    z-index: 2;
  }

  .closeModal {
    display: none;
  }

  div:nth-child(1) button {
    cursor: pointer;
  }

  div:nth-child(2) {
    all: unset;
    margin-top: 52px;
    display: flex;
    align-items: center;
    padding: 6px 4px;
    height: 72px;
  }

  div:nth-child(2) img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    padding: 12px;
  }

  div:nth-child(2) span {
    font-weight: 700;
  }

  button {
    all: unset;
    margin-right: 24px;
    padding: 8px;
  }

  .list {
    all: unset;
    position: absolute;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .list li {
    cursor: pointer;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 6px 4px;
  }

  .list li svg {
    width: 40px;
    height: 44px;
    margin-right: 24px;
    padding: 8px;
  }

  @media(min-width: 1200px) {
    position: absolute;
    top: 50px;
    left: -25px;
    height: min-content;
    border-radius: 30px;
    padding: 10px 30px;
    width: 270px;
    -webkit-box-shadow: -1px 2px 10px 7px rgba(0,0,0,0.13); 
    box-shadow: -1px 2px 10px 7px rgba(0,0,0,0.13);

    .list {
      position: static;
      width: 100%;
    }

    .list li {
      width: 100% !important;
      padding: 0 5px !important;
      margin: 16px 0 !important;
      height: 44px !important;
    }

    .mobileVisible {
      display: none !important;
    }

    .closeModal {
      display: block;
      background-color: transparent;
      position: fixed;
      z-index: -1;
      width: 100%;
      height: 100vh;
      left: 0;
      top: 0;
    }
  }
`;