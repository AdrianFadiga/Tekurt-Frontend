import styled from 'styled-components';

export const SearchScreenStyle = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  z-index: 2;

  section:nth-child(1) {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    height: 48px;
  }

  .searchInput {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.text};
    padding: 5px;
    padding-top: 15px;
  }

  .searchInput:focus {
    outline: none;
    border-width: 2px;
  }

  section:nth-child(1) svg {
    padding: 12px;
    width: 48px;
    height: 100%;
    cursor: pointer;
  }

  section:nth-child(2) {
    height: calc(100vh - 48px);
    overflow: auto;
  }

  @media(min-width: 992px) {
    position: absolute;
    height: 400px;
    width: 100%;
    top: 60px;
    -webkit-box-shadow: 1px 5px 8px -1px rgba(0,0,0,0.23); 
    box-shadow: 1px 5px 8px -1px rgba(0,0,0,0.23);

    section:nth-child(1) {
      display: none;
    }

    section:nth-child(2) {
      height: 100%;
    }
  }
`;