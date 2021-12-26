import { Card, CardContent, Chip, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { withTheme } from "@material-ui/core/styles";
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
              <Typography align="center" color="primary" variant="h4">
                Size {size}
              </Typography>
            </Grid>
            <Grid item xs={7}>
              {/* TODO: make this container alignitems stretch*/}
              <Grid container spacing={4}>
                <Grid item xs={7} sm={7}>
                  <Typography variant="h4" style={{ marginTop: "5%" }}>
                    {purchaseDate}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  {statusBadge}
                </Grid>
              </Grid>
              <br />
              <Typography variant="h5">{title}</Typography>
              <br />
              <Typography variant="h5">Cost: ${purchasePrice}</Typography>
              <Typography variant="h5">Profit: ${profit}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default withTheme(ListItem);
