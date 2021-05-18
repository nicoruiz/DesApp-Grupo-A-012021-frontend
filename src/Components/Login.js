import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import UserPass from "./UserPass";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Login(props) {
  const classes = useStyles();

  function showRegister() {
    props.showRegisterChild(true);
  }


  return (
    <React.Fragment>
      <Box mt={6}>
        <CssBaseline />
        <Container maxWidth="xs">
          <Card className={classes.root}>
            <CardContent>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  gutterBottom
                >
                  LOGIN
                </Typography>
                <UserPass />
              </Grid>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button color="primary" onClick={ () => showRegister() } >Register</Button>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.margin}
                >
                  Sign In
                </Button>
              </Grid>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Container>
      </Box>
    </React.Fragment>
  );
}
