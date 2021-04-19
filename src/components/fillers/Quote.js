import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Quote = () => {
  return (
    <div
      style={{
        minHeight: "50vh",
				padding: "10vh 0",
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
          The climate crisis has already been solved.
          We already have the facts and solutions.
          All we have to do is wake up and change.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          style={{ color: "white", marginTop: 48 }}
        >
          - Greta Thunberg, Environmental Activist
        </Typography>
      </Container>
    </div>
  );
};

export default Quote;
