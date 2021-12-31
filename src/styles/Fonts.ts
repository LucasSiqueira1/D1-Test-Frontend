import { css } from "styled-components";

import {
  GothamBoldEOT,
  GothamBoldSVG,
  GothamBoldTTF,
  GothamBoldWOFF,
  GothamBoldWOFF2,
  GothamBookEOT,
  GothamBookSVG,
  GothamBookTTF,
  GothamBookWOFF,
  GothamBookWOFF2
} from "../assets/fonts";

export const GothamFontFace = css`
    @font-face {
        font-family: 'Gotham-Bold';
        font-weight: 700;
        font-style: bold;
        src: url('${GothamBoldEOT}?vvuwob');
        src: url('${GothamBoldEOT}?vvuwob#iefix') format('embedded-opentype'),
             url('${GothamBoldTTF}?vvuwob') format('truetype'),
             url('${GothamBoldWOFF}?vvuwob') format('woff'),
             url('${GothamBoldWOFF2}?vvuwob') format('woff2'),
             url('${GothamBoldSVG}?vvuwob#spotify') format('svg');
    }
    @font-face {
        font-family: 'Gotham-Book';
        font-weight: 400;
        font-style: normal;
        src: url('${GothamBookEOT}?vvuwob');
        src: url('${GothamBookEOT}?vvuwob#iefix') format('embedded-opentype'),
             url('${GothamBookTTF}?vvuwob') format('truetype'),
             url('${GothamBookWOFF}?vvuwob') format('woff'),
             url('${GothamBookWOFF2}?vvuwob') format('woff2'),
             url('${GothamBookSVG}?vvuwob#spotify') format('svg');
    }
`;
