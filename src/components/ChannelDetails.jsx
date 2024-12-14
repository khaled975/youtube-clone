import { useEffect, useState } from "react";
import { GetVideos } from "../utils/Api";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { Box } from "@mui/material";
function ChannelDetails() {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetVideos(`channels?part=snippet&statistics&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
    GetVideos(`search?part=snippet&channelId=${id}&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box sx={{ margin: "auto", minHeight: "93vh" }}>
      <Box>
        <div
          style={{
            height: "300px",
            zIndex: "10",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 16%, rgba(121,9,92,1) 83%)",
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-120px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "120px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetails;
