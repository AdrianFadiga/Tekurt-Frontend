import styled from 'styled-components';

export const PostsStyle = styled.section`
  main {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
  }

  main h1 {
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    padding: 15px;
  }

  .posts {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 293px 293px 293px;
    gap: 27px;
    justify-content: flex-start;
    background-color: transparent;
  }

  .post {
    width: 293px;
    height: 293px;
    position: relative;
    cursor: pointer;
  }

  .post img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  figcaption {
    opacity: 0;
  }

  .post:hover figcaption {
    transition: 0.3s all ease-in-out;
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #0000004e;
    display: grid;
    place-items: center;
    color: white;
  }

  @media(min-width: 1200px) {
    margin-top: 140px;
    display: grid;
    place-items: center;

    main {
      width: 935px;
      border-top: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;