import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardStaff({ Date1 }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        minWidth: 345,
        background: "#14213D",
        color: "#fff",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {Date1.initials}
          </Avatar>
        }
        title={Date1.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={Date1.Fotography}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="#fff">
          {Date1.stack}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          sx={{ color: "#fff" }}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Datos a destacar:</Typography>
          <Typography paragraph>{Date1.paragraph1}</Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}
