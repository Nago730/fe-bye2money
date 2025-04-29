import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');

      @font-face {
        font-family: 'Chosunilbo_myungjo';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff')
          format('woff');
        font-weight: normal;
        font-style: normal;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        font-family: 'Pretendard', sans-serif;
        background-color: #fbfcfd;
        color: #000000;
      }

      button {
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
      }

      input,
      select,
      textarea {
        font-family: inherit;
        border: none;
        outline: none;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyle;
