import styled from 'styled-components';

export const NavStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 48px;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBackground};

  .logo {
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: flex-start;
    height: 100%;
  }

  .circle {
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 4px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    margin-right: 5px;
  }

  .circle span {
    border: 4px solid white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  nav {
    width: 70%;
    height: 100%;
  }

  nav ul {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    align-items: center;
  }

  ul li {
    height: 48px;
    width: 48px;
    padding: 12px;
  }

  li svg {
    color:  ${({ theme }) => theme.colors.iconNav};
    font-size: 24px;
  }
`;