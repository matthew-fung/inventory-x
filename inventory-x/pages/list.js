import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ListItem from "../components/ListItem";
import { Typography } from "@material-ui/core";
import Header from "../components/Header";
import { items } from "../data/list";

export default function List() {
  const renderItems = items.map((item) => (
    <ListItem
      key={item.id}
      title={item.title}
      imageSrc={item.imageSrc}
      profit={item.profit}
      purchaseDate={item.purchaseDate}
      purchasePrice={item.purchasePrice}
      size={item.size}
      status={item.status}
    />
  ));
  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h1">December 2021</Typography>
            {renderItems}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
