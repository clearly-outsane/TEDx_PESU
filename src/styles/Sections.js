import { makeStyles } from '@material-ui/core/styles';

const aboutSection = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100vh',
    maxHeight: '100%',
  },
  backgroundText: {
    zIndex: 0,
    display: 'block',
    overflowY: 'hidden',
    overflowX: 'hidden',

    margin: 0,
  },
  whiteText: { color: 'white' },
  boldText: { fontWeight: '600' },
  blackBackground: { backgroundColor: 'rgba(0,0,0,0.84)' },
}));

const aboutPageStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100vh',
    maxHeight: '100%',
  },
  backgroundText: {
    zIndex: 0,
    display: 'block',
    overflowY: 'hidden',
    overflowX: 'hidden',
    margin: 0,
  },
  backgroundTextMore: {
    zIndex: 0,
    display: 'block',
    overflowY: 'hidden',
    overflowX: 'hidden',
    margin: 0,
    color: '#222',
  },
  whiteText: { color: 'white' },
  boldText: { fontWeight: '600' },
  blackBackground: { backgroundColor: 'black' },
  whiteBackground: { backgroundColor: 'white' },
}));

const mailchimpFormSection = makeStyles((theme) => ({
  container: {
    padding: '5vh 0',
    display: 'grid',
    placeItems: 'center',
    minHeight: '100vh',
    maxWidth: '100%',
  },
  wordWrap: { wordWrap: 'break-word' },

  whiteText: { color: 'white' },
  blackBackground: { backgroundColor: 'rgba(0,0,0,0.84)' },
  topBotMargin: { marginTop: 18, marginBottom: 18 },
}));

export { aboutSection, aboutPageStyles, mailchimpFormSection };
