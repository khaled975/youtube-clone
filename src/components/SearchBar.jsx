import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm) {
      navigate(`search/${searchTerm}`);

      setSearchTerm("");
    }
  }
  return (
    <Paper
      onSubmit={handleSubmit}
      component="form"
      sx={{
        boxShadow: "none",
        pl: 2,
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        mr: { sm: 10 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
