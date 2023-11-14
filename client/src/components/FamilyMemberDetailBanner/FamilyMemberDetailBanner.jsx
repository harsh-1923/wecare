import React from "react";
import "./FamilyMemberDetailBanner.css";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const FamilyMemberDetailBanner = () => {
  return (
    <div className="fam-dis-wrapper">
      <Grid item xs={12} md={6}>
        <h3 className="fam-title">Member details</h3>
        <List>
          <ListItem>
            <p>hey</p>
          </ListItem>
        </List>
      </Grid>
    </div>
  );
};

export default FamilyMemberDetailBanner;
