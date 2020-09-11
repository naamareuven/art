import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Images from "./images";
import Typography from '@material-ui/core/Typography'
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
   width:"auto",
   textAlign:"left"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  Dialog:{
 width: "70%"
  },
  selectedTile:{
    width: "100%",
    height:"auto"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TitlebarGridList() {
  const classes = useStyles();
  const [selectedTile, setSelectedTile] = React.useState(null);
  const handleDouble = tile =>{
    tile.oncontextmenu = function (e) {
      e.preventDefault();
  };
  }

  const handleClickOpen = tile => {
    setSelectedTile(tile);
  };

  const handleClose = () => {
    setSelectedTile(null);
  };


  return (
    <div className={classes.root}>
      <GridList cols={3}>
        className={classes.gridList}
        {Images.map(tile => (
          <GridListTile key={tile.id}  >
            <img src={tile.src} alt={tile.title}/>
            <GridListTileBar
            onClick={()=> handleDouble(tile)}
            title={tile.title}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                  value={tile.id}
                  onClick={() => handleClickOpen(tile)}
                >
                  <ZoomInIcon />
                  
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Dialog
        open={selectedTile !== null}
        onClose={handleClose}
        TransitionComponent={Transition}
         >

        {selectedTile && (
          <img src={selectedTile.src} alt={selectedTile.title} className={classes.selectedTile} body={selectedTile.body}/>
        
        )}
   
      </Dialog>
    </div>
  );
}
