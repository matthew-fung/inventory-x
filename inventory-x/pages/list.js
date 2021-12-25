import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ListItem from "../components/ListItem";
import { Typography } from "@material-ui/core";

export default function List() {
  const item = {
    id: 1,
    title: "Air Jordan 1 Bred (2016)",
    category: "Sneakers",
    imageSrc:
      "https://image.goat.com/240/attachments/product_template_pictures/images/031/693/881/original/51181_00.png.png",
    purchasePrice: "100",
    profit: "100",
    purchaseDate: "Dec. 13",
    size: "10",
    status: "Sold",
  };
  const items = [item, item, item];

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
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">December 2021</Typography>
          {renderItems}
        </Grid>
      </Grid>
    </Container>
  );
}
