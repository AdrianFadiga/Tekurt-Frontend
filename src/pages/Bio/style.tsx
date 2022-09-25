import styled from 'styled-components';

export const BioStyle = styled.section`
  margin-top: 50px;

  main {
    display: flex;
    flex-direction: column;
  }

  @media(min-width: 1200px) {
    margin-top: 80px;
    display: grid;
    place-items: center;
    padding: 0 1%;
    
    main {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }

  @media(min-width: 1360px) {
    main {
      width: calc(1360px - 2%);
    }
  }
`;