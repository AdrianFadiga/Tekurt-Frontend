import styled from 'styled-components';

export const SuggestionsStyle = styled.section`
  main {
    margin: 50px 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  

  h1 {
    width: 100%;
    text-align: center;
    padding: 20px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.8em;
  }

  @media(min-width: 750px) {
    margin: 50px 0;

    main {
      justify-content: flex-start;
    }    
  }
`;