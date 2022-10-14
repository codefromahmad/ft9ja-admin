import React from "react";
import { Box, CssBaseline } from "@mui/material";
import ProfileNav from "../Componets/ProfileNav";
import ProfileAccountDetails from "../Componets/ProfileAccountDetails";

import { AccProvider } from "../Context/OtherContext";
import PersonalInfo from "../Componets/PersonalInfo";
import ContactInfo from "../Componets/ContactInfo";
import Changepassword from "../Componets/Changepassword";

function Profile() {
  return (
    <AccProvider>
      <div>
        <header>
          <ProfileNav />
        </header>
      </div>
      <br />
      <ProfileAccountDetails />
      <br />
      <PersonalInfo />
      <br />
      <ContactInfo />
      <br />
      <Changepassword />
    </AccProvider>
  );
}

export default Profile;
