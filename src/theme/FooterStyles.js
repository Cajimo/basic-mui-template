import { makeStyles } from '@material-ui/core/styles';

const FooterStyles = makeStyles({
  gridContainer: {
    backgroundColor: 'thistle',
    minHeight: '30vh',
  },
  stayBottom: {
    marginTop: 'calc(5% + 60px)',
    bottom: 0,
  },
});

export default FooterStyles;
