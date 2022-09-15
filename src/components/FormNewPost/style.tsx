import styled from 'styled-components';

export const FormPostStyle = styled.section`
  position: absolute;
  z-index: 3;

  .emptyModal {
    border: none;
    width: 100vw;
    background-color: #00000080;
    height: 200vh;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    cursor: default;
  }

  form {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: 30px;
    width: 90%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .contentPost h1 {
    text-align: center;
    width: 100%;
    padding: 0;
    height: 100%;
    font-size: 100%;
    color: ${({ theme }) => theme.colors.text};
  }

  form input {
    width: 70%;
    margin: 0 auto;
  }

  .contentPost {
    height: 6%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .contentPost input {
    width: 70%;
    padding: 0;
    margin: 0;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0 5px;
    color: ${({ theme }) => theme.colors.text};
  }

  .contentPost input:focus {
    outline: none;
  }

  .contentPost .backImage {
    width: 10%;
    font-size: 100%;
  }

  .submitPost {
    font-size: 0.8em;
    width: 15%;
  }

  .inputImage {
    cursor: pointer;
    width: 100%;
    height: 94%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    margin-bottom: 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .inputImage p {
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.iconNav};
  }

  .inputImage input {
    display: none;
  }

  .inputImage svg {
    color: ${({ theme }) => theme.colors.iconNav};
    font-size: 6em;
  }

  .preview {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    cursor: default;
  }

  @media(min-width: 1200px) {
    form {
      width: 60%;
    }

    .contentPost input {
      width: 80%;
    }

    .submitPost {
      width: 10%;
    }

    .contentPost .backImage {
      width: 5%;
    }
  }
`;