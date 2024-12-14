import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { GetVideos } from "../utils/Api";
import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

function VideoDetails() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  useEffect(() => {
    GetVideos(`videos?part=snippet&statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    GetVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);
  if (!videoDetails?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { likeCount, viewCount },
  } = videoDetails;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ position: "sticky", top: "75px", width: "100%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              height="350px"
              width="100%"
            />
            <Typography
              variant="h5"
              sx={{ color: "#fff", fontWeight: "bold" }}
              p={2}
            >
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" p={1}>
              <Link to={`/channel/${channelId}`}>
                {/* <Stack direction="row"> */}
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ color: "gray", fontSize: "12px", ml: "5px" }}
                  />
                </Typography>
                {/* </Stack> */}
              </Link>
              <Stack direction="row" alignItems="center" gap="20px">
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", opacity: "0.7" }}
                >
                  {parseInt(viewCount).toLocaleString()} view
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", opacity: "0.7" }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box p={2} justifyContent="center" alignItems="center">
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetails;
