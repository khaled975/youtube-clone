import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
  demoVideoUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelTitle
} from "../utils/constants";
function VideoCard({
  videoDetail: {
    id: { videoId },
    snippet,
  },
}) {
  const date = new Date(snippet.publishedAt);
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={`/video/${videoId || demoVideoUrl}`} style={{ width: "100%" }}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle}
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: { xs: "230px", md: "180px" },
          }}
        />
      </Link>

      <CardContent sx={{ height: "106px", backgroundColor: "#1e1e1e" }}>
        <Link to={`/video/${videoId || demoVideoUrl}`}>
          <Typography variant="subtitle1" color={"#fff"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Typography variant="caption" color={"gray"}>
          {/* {getDateFromString(snippet.publishedAt)} */}
          {date.toDateString()}
        </Typography>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" color={"gray"}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
