import { makeStyles } from "@material-ui/core/styles";
import theme from "./BaseStyles";

const MainStyles = makeStyles({
  gridContainer: {
    marginTop: 60,
  },
  text: {
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    padding: theme.spacing(2),
  },
});

export default MainStyles;
