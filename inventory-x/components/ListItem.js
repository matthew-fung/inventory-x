import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import React from "react";

function ListItem() {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Image
                src="https://image.goat.com/240/attachments/product_template_pictures/images/031/693/881/original/51181_00.png.png"
                alt="Picture of the author"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </Grid>
            <Grid item xs={8}>
              {" "}
              <Typography color="text.secondary">Item</Typography>
              <Typography variant="h5" component="div">
                aaa
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ListItem;
