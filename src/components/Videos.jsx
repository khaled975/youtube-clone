import { Box, Stack, Typography } from "@mui/material";
import { VideoCard, ChannelCard, PlaylistCard } from "./";

function Videos({ videos, direction }) {
  if (!videos?.length)
    return (
      <Typography variant="subtitle2" color="#fff">
        loading...
      </Typography>
    );
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="center"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx} width={{ xs: "100%", sm: "358px", md: "320px" }}>
          {item?.id?.videoId && <VideoCard videoDetail={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
          {item?.id?.playlistId && <PlaylistCard playlistDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
