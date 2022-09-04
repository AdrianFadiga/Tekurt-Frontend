import styled from 'styled-components';

export const SearchUserStyle = styled.div`
  height: 60px;
  width: 100%;

  .userSearch {
    display: flex;
    padding: 8px 16px;
    width: 90%;
  }

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 24px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  p:nth-child(1) {
    font-weight: 700;
  }

  p:nth-child(2) {
    font-weight: 200;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;