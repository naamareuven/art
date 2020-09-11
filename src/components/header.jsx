import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    color:"white",

  },
  title: {
    flexGrow: 2,
  },
}));
function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{background:"#4ccc10"}}>
          <Typography variant="h5" style={{float:"left"}} className={classes.title}>
            Thomas Huygen
          </Typography>
          <Button color="inherit">huygen.art@gmail.com</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header