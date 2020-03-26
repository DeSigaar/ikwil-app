export const unit = 15
export const borderRadius = 6
export const headerHeight = 75
export const modalZindex = 1000
export const screenSizeSmall = 320
export const screenSizeMedium = 768
export const screenSizeLarge = 1200

export const isSmallScreen = window.screen.width <= screenSizeSmall
export const isMediumScreen = window.screen.width <= screenSizeMedium
export const isLargeScreen = window.screen.width <= screenSizeLarge

export const sizes = {
  headerHeight,
  screenSizeSmall,
  screenSizeMedium,
  screenSizeLarge,
}

export const init = {
  margin: `calc(${headerHeight * 1.15}px + 9vw) 0 0 0`,
  padding: `0 ${unit}px`,
}

export const screenSizes = {
  small: `${screenSizeSmall}px`,
  medium: `${screenSizeMedium}px`,
  big: `${screenSizeLarge}px`,
}
