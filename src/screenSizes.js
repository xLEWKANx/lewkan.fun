import { css } from "styled-components"

export const LG_SCREEN_SIZE_PX = 1200
export const MD_SCREEN_SIZE_PX = 992
export const SM_SCREEN_SIZE_PX = 768

const createMinQuerySize = size => `(min-width: ${size}px)`
const createMaxQuerySize = size => `(max-width: ${size}px)`

export const mediaQueries = {
  lg: createMinQuerySize(LG_SCREEN_SIZE_PX),
  md: createMinQuerySize(MD_SCREEN_SIZE_PX),
  sm: createMinQuerySize(SM_SCREEN_SIZE_PX),
  xs: createMaxQuerySize(SM_SCREEN_SIZE_PX),
}

export const retinaImage = (imgPath, retinaImgPath) => css`
  background-image: url(${imgPath});
  @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    only screen and (min--moz-device-pixel-ratio: 1.3),
    only screen and (-o-min-device-pixel-ratio: 1.3/1),
    only screen and (min-resolution: 144dpi),
    only screen and (min-resolution: 1.5dppx) {
    backgroundimage: url(${retinaImgPath});
  }
`
