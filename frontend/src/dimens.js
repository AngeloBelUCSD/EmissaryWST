/**
 * @author Anthony Altieri on 6/10/17.
 */

// These must be the same as the Dimensions in style.scss
export const MOBILE_MAX_WINDOW_WIDTH = 767;
export const DESKTOP_MIN_WINDOW_WIDTH = 1128;

export const MOBILE = 'MOBILE';
export const TABLET = 'TABLET';
export const DESKTOP = 'DESKTOP';

export const displayMode = (windowWidth) => {
  if (windowWidth <= MOBILE_MAX_WINDOW_WIDTH) {
    return MOBILE;
  } else if (windowWidth >= DESKTOP_MIN_WINDOW_WIDTH) {
    return DESKTOP;
  } else {
    return TABLET;
  }
};
