import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const categories = [
  { name: "New", icon: <HomeIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Podcast", icon: <GraphicEqIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "ReactJS", icon: <CodeIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "NextJS", icon: <CodeIcon /> },
  { name: "Crypto", icon: <DeveloperModeIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "JS Mastery", icon: <CodeIcon /> },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

export function getDateFromString(dateString) {
  const date = new Date(dateString);

  // Get the year, month, and day from the Date object
  const year = date.getUTCFullYear();
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2); // Month is 0-indexed
  const day = ("0" + date.getUTCDate()).slice(-2);

  // Format the date as YYYY-MM-DD
  const dateOnly = `${year}-${month}-${day}`;

  return dateOnly;
}
