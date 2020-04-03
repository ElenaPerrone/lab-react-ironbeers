import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 500
  }
});

function Homepage() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="All beers"
            height="140"
            image="/images/beers.png"
            title="All beers"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/beers">All Beers</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper molestie sagittis. Praesent luctus blandit felis, quis
              volutpat eros cursus id. Etiam quis condimentum felis, a iaculis
              metus. Integer in ligula lobortis, tincidunt dui sed, convallis
              lectus. Ut commodo nulla efficitur pellentesque gravida.
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Random beer"
            height="140"
            image="/images/random-beer.png"
            title="Random beer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/random-beer">Random Beer</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Te eam option facilis oporteat. Nam cu detracto sapientem, ea
              aeterno feugait omnesque cum. At tempor menandri mandamus mea, et
              nullam consulatu concludaturque mei. Ius audiam necessitatibus in.
              Cu postulant deterruisset sed, et feugait interpretaris his. Mazim
              euismod ex vix. Eam verear evertitur ea, et nonumes explicari
              posidonium has.
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="New beer"
            height="140"
            image="/images/new-beer.png"
            title="New beer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/new-beer">New Beer</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Vide alienum periculis at per, magna timeam sed ex. Qui te cibo
              omittam deterruisset, nam ad mundi vulputate liberavisse. Vocent
              hendrerit cu pro. Accumsan delectus contentiones mei ex, in his
              vitae labitur perpetua, cum munere repudiare forensibus ea. Ut est
              partem fastidii voluptatibus, usu mucius omittam cu.
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card>
    </div>
  );
}

export default Homepage;
