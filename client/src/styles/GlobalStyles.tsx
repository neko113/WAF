import { Global, css } from '@emotion/react';
import reset from '@src/styles/reset';
const GlobalStyles = () => {
  return (
    <>
      <Global styles={reset} />
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          input {
            outline: none;
            border: none;
          }
          button {
            border: none;
            outline: none;
            background: none;
            cursor: pointer;
          }
          a {
            text-decoration: none;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;