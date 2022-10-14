import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Box } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

function AffiliateHIW() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          fontSize: "28px",
        }}
      >
        How it Works
      </Box>
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            // youtube={{
            //   autoplay: 1,
            //   mute: 1,
            // }}
            autoplay="true"
            allow={"autoplay"}
            videoId="dQw4w9WgXcQ"
            onClose={() => setOpen(false)}
            width="100%"
            controls={false}
            start={1}
            autopause={false}
          />
          <Box
            sx={{
              width: "30%",
            }}
            className="video"
          >
            <img
              onClick={() => setOpen(true)}
              src="http://i3.ytimg.com/vi/me9ASYfRNak/hqdefault.jpg"
              alt=" "
              style={{ width: "100%" }}
            />
            <div onClick={() => setOpen(true)}></div>
          </Box>
        </>
        <Box
          sx={{
            width: "50%",
            marginLeft: "9px",
            fontWeight: 375,
            fontSize: "calc(0.8vw + 1.1vmin)",
          }}
        >
          <ol>
            <li>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              pretium ut proin egestas morbi vitae massa.{" "}
            </li>
            <br />
            <li>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              pretium ut proin egestas morbi vitae massa.{" "}
            </li>
            <br />
            <li>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              pretium ut proin egestas morbi vitae massa.{" "}
            </li>
          </ol>
        </Box>
      </Box>
    </Box>
  );
}

export default AffiliateHIW;
