import styled from 'styled-components';

export const PostsStyle = styled.section`
  main {
    display: flex;
    flex-direction: column;
  }

  .desktop {
    display: none;
  }

  .posts {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-auto-rows: 25%;
    gap: 0.5%;
    background-color: transparent;
  }

  main h1 {
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    padding: 15px;
  }

  .post {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
  }

  .post img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  figcaption {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    transition: 0.3s all ease-in-out;
    opacity: 0;
    background-color: #00000070;
    display: grid;
    place-items: center;
    color: white;
  }

  .post:hover figcaption {
    opacity: 1;
  }

  @media(min-width: 1200px) {
    margin-top: 140px;
    display: grid;
    place-items: center;

    main {
      width: 935px;
      border-top: 1px solid ${({ theme }) => theme.colors.border};
      margin-bottom: 25px;
    }

    .posts {
      display: grid;
      flex-wrap: wrap;
      grid-template-columns: 293px 293px 293px;
      grid-auto-rows: 293px;
      gap: 27px;
      justify-content: flex-start;
      background-color: transparent;
    }

    .post {
      border-radius: 30px;
    }

    .post img {
      width: 293px;
      height: 293px;
      object-fit: cover;
      border-radius: 15px;
    }

    figcaption {
      border-radius: 15px;
    }
  }
`;