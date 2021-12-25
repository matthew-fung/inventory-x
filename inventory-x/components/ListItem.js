import { Card, CardContent, Chip, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";

function ListItem({
  imageSrc,
  title,
  status,
  size,
  purchasePrice,
  purchaseDate,
  profit,
}) {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={5}>
              <Image
                src={imageSrc}
                alt="Picture of the author"
                width="100%"
                height="100%"
                layout="responsive"
              />
              <Typography variant="h6">Size {size}</Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h6">{purchaseDate}</Typography>
              <Typography variant="h5">{title}</Typography>
              <br />
              <Typography>Cost: $ {purchasePrice}</Typography>
              <Typography>Profit: $ {profit}</Typography>
              <br />
              <Chip label={status} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default ListItem;
