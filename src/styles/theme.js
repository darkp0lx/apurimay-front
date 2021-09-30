export const colors = {
  bg: '#1a191f',
  bg2: '#212026',
  gray: '#313036',
  text: '#272727',
  black: '#000000',
  white: '#ffffff',
  orange: '#FF8000',
  bgComments:'#FAFAFA'
}

const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '560px',
  tablet: '768px',
  tabletM: '900px',
  laptop: '1024px',
  laptopS: '1150px',
  laptopM: '1260px',
  laptopL: '1440px',
  desktop: '1650px',
  desktopM: '1950px',
  desktopL: '2560px'
}

export const device = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  mobileXL: `(min-width: ${breakpoints.mobileXL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  tabletM: `(min-width: ${breakpoints.tabletM})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  laptopS: `(min-width: ${breakpoints.laptopS})`,
  laptopM: `(min-width: ${breakpoints.laptopM})`,
  laptopL: `(min-width: ${breakpoints.laptopL})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopM: `(min-width: ${breakpoints.desktopM})`,
  desktopL: `(min-width: ${breakpoints.desktopL})`
}

export default {
  colors,
  breakpoints,
  device
}