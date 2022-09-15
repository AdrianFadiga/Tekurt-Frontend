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
    width: 60%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .contentPost h1 {
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
    justify-content: space-around;
  }

  .contentPost input {
    padding: 0;
    margin: 0;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  .contentPost input:focus {
    outline: none;
  }

  .submitPost {
    font-size: 100%;
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
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;