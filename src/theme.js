import {createTheme} from "@nextui-org/react"

const theme = createTheme({
    type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primary: '#000000',  
      white: "#ffffff",
      grey: "#7E868C",
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',
    },
    space: {},
    fonts: {}
  }
})

export default theme