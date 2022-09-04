import styled from 'styled-components';

export const OptionsStyle = styled.section`
  position: absolute;
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
    position: absolute ;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .list li {
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
`;