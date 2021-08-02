import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root1: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  whiteLinks: {
    color: 'white',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  // const preventDefault = (event) => event.preventDefault();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton> */}
          <Typography className={classes.root1}>
            <Link
              href='main'
              //onClick={preventDefault}
              className={classes.whiteLinks}
            >
              Home
            </Link>
            <Link
              href='create'
              // onClick={preventDefault}
              className={classes.whiteLinks}
            >
              Create Event
            </Link>
            <Link
              href='signOut'
              // onClick={preventDefault}
              className={classes.whiteLinks}
            >
              Sign Out
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}