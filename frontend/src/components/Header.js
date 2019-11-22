import React from 'react';
import AppBar     from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon   from '@material-ui/core/Menu';
import Button     from '@material-ui/core/Button';
import Toolbar    from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    'display' : 'flex',
    'justify-content': 'center',
    //alignItems: 'center',
    //align: 'center',
  },
  button: {
  }
}));

//class Header extends React.Component {
const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            {process.env.REACT_APP_WEBSITE_NAME}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
