import React from "react";

import { mailchimpFormSection } from "../styles/Sections";

const MailchimpForm = () => {
  const classes = mailchimpFormSection();
  const [email, setEmail] = React.useState("");

  return <div className={classes.container}>asdf</div>;
};

export default MailchimpForm;
