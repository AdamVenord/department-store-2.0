import React from 'react';
import { Link, } from "react-router-dom";
import { Button, Header, } from "semantic-ui-react";

const NoMatch = () => (
  <div style={styles.container}>
    <Header as="h1" style={styles.header}>Wait A Minute</Header>
    <Header as="h1" style={styles.header}>Where Are You?</Header>
    <Header as="h3">That Must've Been A Broken Link.....</Header>
    <Header as="h4">UwU Our Bad.</Header>
    <Link to="/">
      <Button color="black">Head Home My Friend</Button>
    </Link>
  </div>
)

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  header: {
    fontSize: "50px",
  },
};

export default NoMatch;
