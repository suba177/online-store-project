import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function GoodsItem(props) {
  const { category, name, poster, price } = props;

  return (
    <Grid item md={3}>
      <Card sx={{ minHeight: "340px", width: "auto" }}>
        <CardMedia
          component="img"
          sx={{ height: "250px", width: "250px", margin: "0 auto" }}
          src={poster}
          alt={name}
          title={name}
        />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">Цена: {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button>В корзину</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
