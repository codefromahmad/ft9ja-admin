import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Box } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import axios from "../axios";

function AffiliateHIW() {
  const [isOpen, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/gethowitworks/`)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          fontSize: "calc(1.9vw + 0.7vh + .1vmin)",
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
            videoId={info.content}
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
          >
            <img
              onClick={() => setOpen(true)}
              src={info.image}
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
