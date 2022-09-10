import styled from 'styled-components';

export const BioStyle = styled.section`
  margin-top: 50px;

  main {
    display: flex;
    flex-direction: column;
  }

  @media(min-width: 992px) {
    margin-top: 140px;
    
    main {
      flex-direction: row;
    }
  }
`;