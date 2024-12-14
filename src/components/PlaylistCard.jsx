import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Overlay from "./Overlay";
import { demoVideoUrl } from "../utils/constants";

function PlaylistCard({
  playlistDetail: {
    id: { playlistId },
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
        position: "relative",
      }}
    >
      <Link to={`/video/${playlistId || demoVideoUrl}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt=""
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: { xs: "230px", md: "180px" },
            position: "relative",
          }}
        >
          <Overlay text="PlayList" />
        </CardMedia>
      </Link>
      <CardContent sx={{ height: "106px", backgroundColor: "#1e1e1e" }}>
        <CardContent sx={{ height: "106px", backgroundColor: "#1e1e1e" }}>
          <Link to={`/video/${playlistId}`}>
            <Typography variant="subtitle1" color={"#fff"}>
              {snippet?.title.slice(0, 60)}
            </Typography>
          </Link>
          <Typography variant="caption" color={"gray"}>
            {date.toDateString()}
          </Typography>
          <Link to={`/channel/${snippet?.channelId}`}>
            <Typography variant="subtitle2" color={"gray"}>
              {snippet?.channelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
        t
      </CardContent>
    </Card>
  );
}

export default PlaylistCard;
