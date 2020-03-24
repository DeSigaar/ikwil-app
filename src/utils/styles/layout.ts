export const isSmallScreen = window.screen.width <= 320
export const isMediumScreen = window.screen.width <= 768
export const isLargeScreen = window.screen.width <= 1200

const headerHeight = 110

export const sizes = {
  headerHeight,
}

export const init = {
  margin: 0,
  padding: `${headerHeight * 1.15}px 15px 0`,
}

export const screenSizes = {
  small: '320px',
  medium: '768px',
  big: '1200px',
}
