import React from "react";

import Facebook from "react-sharingbuttons/dist/buttons/Facebook";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";

import "react-sharingbuttons/dist/main.css";

export default function ShareWidget({ url }) {
  return (
    <>
      <Facebook url={url} />
      <Twitter url={url} />
    </>
  );
}
