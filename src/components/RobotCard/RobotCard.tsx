import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { RobotStructure } from "../../data/types";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: {
    attributes: { creationDate, resistance, speed },
    image,
    name,
  },
}: RobotCardProps) => {
  return (
    <li>
      <Card sx={{ width: 255, m: 2 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          alt={name}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Resistance:{resistance}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Speed:{speed}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {creationDate}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined">Delete</Button>
          <Button variant="outlined">Edit</Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default RobotCard;
