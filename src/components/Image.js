import React, { Component } from 'react';
import Images from './images';
import { GridList } from '@material-ui/core';
import { GridListTile } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles((theme) => ({
 
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));
export default class Image extends Component {
    render() {
        const classes=useStyles;
        const actions = [
          <CloseIcon label='Close'primary ={true} onClick={this.handleClose}/>
        ]
        return (
            <div className={classes.root}>
                <GridList cellHeight={300} className={classes.gridList} cols={3}>
                { Images.map(({id, src}) =>< GridListTile onClick={this.handleOpen} key={id} actionIcon ={<IconButton><ZoomInIcon color="white"></ZoomInIcon></IconButton>}>
                <img key={id} src={src} alt='' />
                </GridListTile>)}
                </GridList>
    
            </div>
        )
    }
}
