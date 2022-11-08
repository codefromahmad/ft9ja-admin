import React from "react";
import { Box, CssBaseline } from "@mui/material";
import ProfileNav from "../Componets/ProfileNav";
import ProfileAccountDetails from "../Componets/ProfileAccountDetails";

import { AccProvider } from "../Context/OtherContext";
import PersonalInfo from "../Componets/PersonalInfo";
import ContactInfo from "../Componets/ContactInfo";
import Changepassword from "../Componets/Changepassword";
import MainNav from "../Componets/MainNav";
import { useMediaQuery } from "@mui/material";

function Profile() {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <AccProvider>
        <header>
          <MainNav />
        </header>
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