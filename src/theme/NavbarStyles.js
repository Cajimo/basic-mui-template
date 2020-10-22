import { makeStyles } from "@material-ui/core/styles";
import theme from "./BaseStyles";

const NavbarStyles = makeStyles({
  gridContainer: {
    backgroundColor: "transparent",
    color: theme.palette.primary.dark,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    flexGrow: 1,
  },
  loginButton: {
    flexGrow: 1,
  },
});

export default NavbarStyles;
