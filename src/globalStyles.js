import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Barlow Semi Condensed", serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
    }

    ul {
        list-style-type: none;
    }

    @mixin for-size($size) {
        @if $size == phone-only {
            @media (max-width: 599px) { @content; }
        } @else if $size == tablet-portrait-up {
            @media (min-width: 600px) { @content; }
        } @else if $size == tablet-landscape-up {
            @media (min-width: 767px) { @content; }
        } @else if $size == desktop-up {
            @media (min-width: 1023px) { @content; }
        } @else if $size == big-desktop-up {
            @media (min-width: 1800px) { @content; }
        }
    }
`;

export default GlobalStyle;
