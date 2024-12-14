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
          <Route exact path="/" element={<HomeContent />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          {/* 
        <Route path='/' element={}/> */}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
