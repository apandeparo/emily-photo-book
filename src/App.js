import './App.css';
import JonAndShea from './images/JonAndShea.png'
import AaronAndDaphna from './images/AaronAndDaphna.png'
import YgalAndKimberely from './images/YgalAndKimberely.png'
import TheChevys from './images/TheChevys.png'
import DaniAndJaime from './images/DaniAndJaime.png'
import NickAndAmber from './images/NickAndAmber.png'
import ScottAndSami from './images/ScottAndSami.png'
import Helms from './images/Helms.png'
import JordanAndHaley from './images/JordanAndHaley.png'
import YanivAndCarol from './images/YanivAndCarol.png'
import Jake from './images/Jake.png'
import EmilyPhotoAlbum from './images/EmilyPhotoAlbum.jpeg'
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import '@fontsource/roboto/300.css';

function App() {
  const [index, setIndex] = useState(-1);

  const photos = [
    { src: JonAndShea, width: 800, height: 1200 },
    { src: AaronAndDaphna, width: 800, height: 1200 },
    { src: YgalAndKimberely, width: 800, height: 1200 },
    { src: TheChevys, width: 800, height: 1200 },
    { src: DaniAndJaime, width: 800, height: 1200 },
    { src: NickAndAmber, width: 800, height: 1200 },
    { src: Helms, width: 800, height: 1200 },
    { src: ScottAndSami, width: 800, height: 1200 },
    { src: JordanAndHaley, width: 800, height: 1200 },
    { src: YanivAndCarol, width: 800, height: 1200 },
    { src: Jake, width: 800, height: 1200 }

  ];

  const slides = photos.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
  }));
return (
  <Grid
  container
  spacing={5}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
  >

  <Grid item xs={3}>
  <Typography variant="h4" gutterBottom>
        Emily's Photo Album
    </Typography>
  </Grid>
  <Grid item xs={3}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={EmilyPhotoAlbum}
          alt="Hi Emily"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hi Babe!
          </Typography>
          <Typography variant="body2" color="text.secondary">
          I am SO excited to introduce you to my friends this weekend.
          Here's a little preview to get you caught up before the wedding.
          Love you!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={({  }) => setIndex(0)}>
          Start Slideshow
        </Button>
      </CardActions>
    </Card>
  </Grid>   
  <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
</Grid> 




  );
}

export default App;
