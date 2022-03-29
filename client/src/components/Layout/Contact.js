import React from "react";
import { connect } from "react-redux";
import SocialMediaLinks from "./SocialMediaLinks";

export const Contact = (props) => {
  return (
    <div>
      My Contact List
      <SocialMediaLinks />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
