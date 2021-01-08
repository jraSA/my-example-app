import { BaseTheme } from 'ui-example-library';

const { color, fonts } = BaseTheme;
const { blues, oranges, grays } = color;
const { fontSizes } = fonts;

const theme = {
  titleColor: blues[500],
  textColor: oranges[700],
  primaryBackground: grays[100],
  secondaryBackground: grays[200],
  textSize: fontSizes[7],
  titleSize: fontSizes[9],
};

export default theme;
