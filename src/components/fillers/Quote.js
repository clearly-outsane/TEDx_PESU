import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Quote = () => {
  return (
    <div
      style={{
        minHeight: "50vh",
        backgroundColor: "black",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{ color: "white" }}
        >
          We are the first generation to feel the effect of climate change and
          the last generation who can do something about it.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          style={{ color: "white", marginTop: 48 }}
        >
          - Barack Obama, Former US President
        </Typography>
      </Container>
    </div>
  );
};

export default Quote;
