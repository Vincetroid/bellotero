import { createMuiTheme } from '@material-ui/core/styles';

const cobaltBlue = "#071eb3";
const iceBlue = "#f9faff";
const almostBlack = "#161616";
const white = "#fff";
const grey = "#a5a5a5";

export default createMuiTheme({
  palette: {
    common: {
      cobaltBlue: `${cobaltBlue}`,
      iceBlue: `${iceBlue}`,
      black: `${almostBlack}`,
      white: `${white}`,
      grey: `${grey}`
    },
    primary: {
      main: `${cobaltBlue}`
    },
    secondary: {
      main: `${almostBlack}`
    },
    background: {
      default: `${iceBlue}`
    }
  },
  typography: {
    tab: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      textTransform: "capitalize",
    },
    title: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '36px',
      fontWeight: 900,
      fontStretch: 'normal',
      lineHeight: '1.11',
      letterSpacing: '0.77px',
      textAlign: 'center',
    },
    personName: {
      fontFamily: 'Roboto, sans-serif',
    },
    mainParagraph: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '24px',
      fontWeight: 900,
      fontStretch: 'normal',
      lineHeight: '1.33',
      letterSpacing: 'normal',
    },
    secondaryParagraph: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 500,
      fontStretch: 'normal',
      lineHeight: '24px',
      letterSpacing: 'normal',
    },
    paginator: {
      fontFamily: 'Cormorant Garamond',
      fontSize: '32px',
      fontStyle: 'italic',
      lineHeight: '1',
      letterSpacing: '-2px',
    },
    label: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '14px',
      fontWeight: 900,
      margin: 0,
    }
  },
  widthContainer: {
    width: '82%'
  }
})