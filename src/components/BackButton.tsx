import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function BackButton(): JSX.Element
{const navigate= useNavigate();
return (

  <IconButton size="large" sx={{background:"rgb(206, 8, 58)",":hover":{background:"rgb(53 44 173)"}}} onClick={()=>{{navigate("/")}}}>
  <ArrowForwardIcon/>
</IconButton>
)
}
