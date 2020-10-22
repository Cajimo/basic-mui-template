import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./BaseStyles";
const FooterStyles = makeStyles({
  gridContainer: {
    backgroundColor: theme.palette.primary.dark,
    minHeight: "30vh",
  },
  gridItem: {
    backgroundColor: "white",
  },
  stayBottom: {
    marginTop: "calc(5% + 60px)",
    bottom: 0,
  },
});

export default FooterStyles;
