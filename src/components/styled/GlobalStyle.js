import { createGlobalStyle, css } from 'styled-components';
import { fonts } from '@/helpers/styles';

const styles = css`
    *,
    *::before,
    *::after {
        font-size: 16px;
        box-sizing: border-box;
        font-family: ${fonts.base};
    }

    html,
    body,
    #main {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: visible;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
`;

export default createGlobalStyle`
    ${styles}
`;
