import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  about: {
    '@media (max-width: 600px)': {
      paddingBottom: theme.spacing(5),
    },
    background: 'none',
    flex: '1',
    position: 'relative',
  },
  aboutContainer: {
    width: '100%'
  },
  aboutContext: {
    '@media (max-width: 960px)': {
      textAlign: 'center',
    },
    '@media (min-width: 960px)': {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
  aboutContextWrapper: {
    '@media (max-width: 960px)': {
      margin: '0 auto',
    },
    maxWidth: '80%',
  },
  context: {
    '@media (min-width: 1280px)': {
      '-webkit-transform': 'translateY(-50%)',
      maxHeight: '100%',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    height: '100%',
  },
  cv: {
    paddingTop: theme.spacing(4),
  },
  description: {
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
    },
    margin: '0',
  },
  profileImage: {
    '@media (max-width: 960px)': {
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
    },
    '@media (min-width: 960px)': {
      float: 'right',
      padding: theme.spacing(10),
      transform: 'translateY(-50%)',
      width: '55%',
    },
    objectFit: 'contain',
    position: 'relative',
    top: '50%',
  },
  profileImageContainer: {
    '@media (max-width: 960px)': {
      margin: '0 auto',
      maxHeight: '80%',
      maxWidth: '80%',
    },
    '@media (min-width: 960px)': {
      maxHeight: '100%',
      maxWidth: '100%',
    },
  },
  role: {
    '@media (max-width: 600px)': {
      fontSize: '0.8rem',
    },
    color: 'grey',
    marginTop: '10px',
  },
  snsContainer: {
    '@media (max-width: 960px)': {
      justifyContent: 'center',
    },
  },
  snsIcon: {
    fontSize: '2.0rem',
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(3),
  },
  snsLink: {
    color: 'black'
  },
});

export type Styles = WithStyles<typeof styles>;
