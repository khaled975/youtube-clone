import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Sidebar, Videos } from "./";

import { GetVideos } from "../utils/Api";
// #fci503
function HomeContent() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    GetVideos(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, height: "100vh" }}>
      <Box
        sx={{
          //   display: "flex",
          //   flexDirection: { sx: "row", md: "column" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          height: { sx: "auto", md: "98vh" },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyrights &copy; KH-DEV 2024
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", flex: 2 }}>
        <Typography
          variant="h4"
          mb={2}
          sx={{ color: "#fff", fontWeight: "bold" }}
        >
          {selectedCategory} <span style={{ color: "red" }}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
}

export default HomeContent;
