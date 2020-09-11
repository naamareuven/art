import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    root: {
     color:"white",
     textAlign:"center"
    }
}));
 class Text extends Component {
    render() {
       const classes = useStyles; 
        return (
            <div>
                 <React.Fragment>
                 <Container style={{color:"white"}}>
                     <Box style={{textAlign:"center"}}>
                         <h1>Portfolio</h1>
<p>Dit portfolio is samengesteld om een aantal punten uit te lichten.  Allereerst wil ik de diversiteit aan stijlen laten zien die ik onder mijn riem heb. Daarnaast mijn ontwikkeling in het gebruik van verschillende soorten media. En als laatst wil ik graag een kort overzicht geven over mijn ontwikkeling als beeldmaker. <br/>
Momenteel werk ik bijna exclusief digitaal. Ik maak mijn eigen verjaardagskaarten, ontwerp Pokemon afbeeldingen (yes, guilty pleasure), ik ben landschappen gaan schilderen voor mijn eigen project en ik ontwerp free-to-download Dungeons & Dragons materiaal. Het digitale medium heeft mijn werk doen opleven en ik haal dan ook veel plezier hier uit.</p>
                     </Box>
                 </Container>
                 </React.Fragment>
                
            </div>
        )
    }
}
export default Text;
