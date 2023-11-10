import React from "react";
import "./ProfilePage.css";
import HERO from "../../assets/HERO.png";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import MailIcon from "@mui/icons-material/Mail";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import AdjustIcon from "@mui/icons-material/Adjust";

const ProfilePage = () => {
  return (
    <div className="profile-wrapper">
      <img className="profile-pic-wrapper" src={HERO}></img>
      <h1 className="profile-name">Harsh Sharma</h1>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email ID" secondary="test@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CallRoundedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Contact" secondary="+91 90078 24603" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AdjustIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Unique ID" secondary="129837aisud91" />
        </ListItem>
      </List>

      {/* <div className="details-wrapper">
        <DetailStrip tag="Email" val="test.gfajsfd2@gmail.com" />
        <DetailStrip tag="Contact" val="9837249839" />
        <DetailStrip tag="UID" val="198274h09138" />
        <DetailStrip tag="Name" val="Harsh Sharma" />
        <DetailStrip tag="Name" val="Harsh Sharma" />
        <DetailStrip tag="Name" val="Harsh Sharma" />
      </div> */}
    </div>
  );
};

const DetailStrip = ({ tag, val }) => {
  return (
    <div className="detail-strip">
      <p className="detail-text">{tag}</p>
      <p className="detail-text">{val}</p>
    </div>
  );
};

export default ProfilePage;
