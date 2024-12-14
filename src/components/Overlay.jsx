import { Typography } from "@mui/material";

function Overlay({ text }) {
  return (
    <div
      style={{
        width: "40%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        background: "#0000005e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="overline" sx={{ fontWeight: "bold", color: "#fff",fontSize:'18px'}}>
        #{text}
      </Typography>
    </div>
  );
}

export default Overlay;
