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
  let statusBadge;
  switch (status) {
    case "Sold":
      statusBadge = <Chip color="success" label={status} />;
    case "On hand":
      statusBadge = <Chip color="warning" label={status} />;
    case "In transit":
      statusBadge = <Chip color="secondary" label={status} />;
    case "Hold":
      statusBadge = <Chip color="info" label={status} />;
  }
  return (
    <div style={{ marginBottom: "3%" }}>
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
              <Typography color="primary" variant="h4">
                Size {size}
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h4">{purchaseDate}</Typography>
              <br />
              <Typography variant="h4">{title}</Typography>
              <br />
              <Typography variant="h5">Cost: $ {purchasePrice}</Typography>
              <Typography variant="h5">Profit: $ {profit}</Typography>
              <br />

              {statusBadge}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default ListItem;
