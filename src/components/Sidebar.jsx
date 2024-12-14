import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      sx={{
        flexDirection: { xs: "row", md: "column" },
        height: { xs: "auto", md: "95%" },
        overflowY: "auto",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.name}
          className="category-btn"
          style={{
            background: cat.name === selectedCategory && "#fc1503",
            color: "white",
          }}
          onClick={() => setSelectedCategory(cat.name)}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? "#fff" : "red",
              marginRight: "10px",
            }}
          >
            {cat.icon}
          </span>
          <span
            style={{
              color: "#fff",
              opacity: cat.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
