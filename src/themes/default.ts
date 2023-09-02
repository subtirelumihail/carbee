import chroma from "chroma-js";

const colors = {
  primary: "#fd4f35",
  secondary: "#0e0f15",
};

const generateColorShades = (color: string): any => {
  const baseColor = chroma(color);
  const shades = chroma
    .scale([baseColor.brighten(1.5), color, baseColor.darken(1.5)])
    .mode("lch")
    .colors(10);
  return shades;
};

const theme = {
  fontFamily:
    "-apple-system,blinkmacsystemfont,avenir next,avenir,segoe ui,helvetica neue,helvetica,ubuntu,roboto,noto,arial,sans-serif",
  headings: { fontFamily: "Times New Roman,times,baskerville,georgia" },
  colors: {
    primary: generateColorShades(colors.primary),
    secondary: generateColorShades(colors.secondary),
  },
  primaryColor: "primary",
  breakpoints: {
    xs: "30em",
    sm: "52em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
};

export default theme;
