import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import useApi from "../../hooks/useApi";
import RobotCard from "../RobotCard/RobotCard";

const RobotList = (): JSX.Element => {
  const { getRobots } = useApi();
  const robots = useAppSelector((state) => state.robots);

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <ul className="card-list">
      {robots.map((robot) => (
        <li className="robot-card">
          <RobotCard robot={robot} key={robot.id} />
        </li>
      ))}
    </ul>
  );
};

export default RobotList;
