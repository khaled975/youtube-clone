import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { Videos } from "./";

import { GetVideos } from "../utils/Api";
import { useParams } from "react-router-dom";
// #fci503
function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    GetVideos(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: "auto", flex: 2, height: "90vh" }}>
      <Typography
        variant="h4"
        mb={2}
        sx={{ color: "#fff", fontWeight: "bold" }}
      >
        Search Results For: <span style={{ color: "red" }}> {searchTerm} </span>
        Videos
      </Typography>
      <Box display={'flex'}>
        <Box sx={{ mr: { sm: "120px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default SearchFeed;
