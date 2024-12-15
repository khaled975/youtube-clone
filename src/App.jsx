import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChannelDetails,
  HomeContent,
  Navbar,
  SearchFeed,
  VideoDetails,
} from "./components/";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />

        <Routes>
          <Route exact path="/youtube-clone" element={<HomeContent />} />
          <Route path="/youtube-clone/channel/:id" element={<ChannelDetails />} />
          <Route path="/youtube-clone/video/:id" element={<VideoDetails />} />
          <Route path="/youtube-clone/search/:searchTerm" element={<SearchFeed />} />
          {/* 
        <Route path='/' element={}/> */}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
