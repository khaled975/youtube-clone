import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { demoChannelTitle, demoProfilePicture } from "../utils/constants";
function ChannelCard({ channelDetail, marginTop }) {

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.channelId || channelDetail?.id}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.channelTitle || demoChannelTitle}
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              margin: "15px auto",
            }}
          />
          <Typography variant="h6" color="#fff">
            {channelDetail?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 15, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics && (
            <Typography variant="caption" color="gray">
              {channelDetail?.statistics?.subscriberCount} Subscriber
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
