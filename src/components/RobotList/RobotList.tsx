import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import useApi from "../../store/hooks/useApi";
import RobotCard from "../RobotCard/RobotCard";

const RobotList = (): JSX.Element => {
  const { loadRobots } = useApi();
  const robots = useAppSelector((state) => state.robots);

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <ul className="card-list">
      {robots.map((robot) => (
        <RobotCard robot={robot} key={robot.id} />
      ))}
    </ul>
  );
};

export default RobotList;
