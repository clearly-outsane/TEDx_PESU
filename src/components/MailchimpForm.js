import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import clsx from "clsx";

import { PrimaryTextField, PrimaryButton } from "../styles/theme";
import { mailchimpFormSection } from "../styles/Sections";
import SocialMedia from "./SocialMedia";
import CallToAction from "../components/JoinTheCountdown";

const MailchimpForm = () => {
  const classes = mailchimpFormSection();
  const [email, setEmail] = React.useState("");

  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        {/* <Typography
          variant="h2"
          gutterBottom
          align="center"
          className={classes.wordWrap}
        >
          Join the Countdown
        </Typography>
        <Typography
          variant="body1"
          className={clsx(classes.boldText)}
          gutterBottom
          align="center"
          style={{ margin: 18 }}
        >
          What are you waiting for? Join us on our journey to make an impact. Be
          the change.
        </Typography> */}
        <CallToAction />
      </Container>
      <div>
        <form
          action="https://tedxpesu.us17.list-manage.com/subscribe/post?u=ba7804f5c0145f0050fc88bd4&amp;id=f7a8682e3a"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
          style={{ height: "100%" }}
        >
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs>
              <PrimaryTextField
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                variant="outlined"
                required
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item xs className={classes.topBotMargin}>
              <PrimaryTextField
                fullWidth
                type="name"
                name="FNAME"
                id="mce-FNAME"
                variant="outlined"
                required
                label="Name"
              />
            </Grid>
            <Grid item xs style={{ height: "100%" }}>
              <PrimaryButton
                id="mc-embedded-subscribe"
                type="submit"
                size="large"
              >
                Register
              </PrimaryButton>
            </Grid>

            {/* this div is for bot spam protection do not remove */}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_ba7804f5c0145f0050fc88bd4_f7a8682e3a"
                tabindex="-1"
                value=""
              />
            </div>
          </Grid>
        </form>
        <div style={{ marginTop: " 50%" }}>
          <SocialMedia />
        </div>
      </div>

      <div>
        <Grid container alignItems="flex-end">
          <Typography
            variant="caption"
            gutterBottom
            style={{ margin: 18 }}
            align="center"
          >
            We promise not to spam your inbox. You will only receive relevant
            emails and content about our events.
          </Typography>
        </Grid>
      </div>
    </div>
  );
};

export default MailchimpForm;
