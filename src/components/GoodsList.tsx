import GoodsItem from "./GoodsItem";
import { Grid, Container } from "@mui/material";

export default function GoodsList(props) {
  const { goods } = props;

  return (
    <Container>
      <Grid container spacing={2}>
        {goods.map((item) => (
          <GoodsItem key={item.id} {...item} />
        ))}
      </Grid>
    </Container>
  );
}
