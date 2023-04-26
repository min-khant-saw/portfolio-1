import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import Container from "./Container";

const Content = () => {
  return (
    <Container classs="h-16 bg-gray-900 flex justify-center flex-col">
      <div className="flex justify-center items-center flex-row">
        <div className="flex justify-center items-center gap-x-4">
          <a
            href="https://www.facebook.com/min.k.saw.4"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookRoundedIcon color="info" fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/min-khant-saw-aa2423240/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon color="info" fontSize="large" />
          </a>
          <a href="mailto:minkhantsaw04@gmail.com">
            <MailIcon color="info" fontSize="large" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Content;
