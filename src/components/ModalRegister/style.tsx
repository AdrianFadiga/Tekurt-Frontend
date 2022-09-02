import styled from 'styled-components';

export const ModalStyle = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;

  .closeModal {
    display: none;
    border: none;
  }

  @media(min-width: 600px) {
    .closeModal {
      display: block;
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100vh;
    }
  }
`;