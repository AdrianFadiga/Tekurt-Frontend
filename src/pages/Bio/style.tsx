import styled from 'styled-components';

export const BioStyle = styled.section`
  margin-top: 50px;

  main {
    display: flex;
    flex-direction: column;
  }

  @media(min-width: 1200px) {
    margin-top: 70px;
    display: grid;
    place-items: center;
    
    main {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 20px;
      width: 1250px;
    }
  }
`;