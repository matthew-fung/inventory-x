import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ListItem from "../components/ListItem";
import { Typography } from "@material-ui/core";

export default function List() {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">December 2021</Typography>
          <ListItem />
        </Grid>
      </Grid>
    </Container>
  );
}
