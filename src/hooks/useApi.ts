import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  ApiResponseStructure,
  UnidentifiedRobotStructure,
} from "../data/types";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlice";

const useApi = () => {
  const urlApi = process.env.REACT_APP_URL_API!;

  const dispatch = useDispatch();

  const getRobots = useCallback(async () => {
    try {
      const response = await fetch(urlApi);

      const robotsFromApi = (await response.json()) as ApiResponseStructure;

      dispatch(loadRobotsActionCreator(robotsFromApi.robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [urlApi, dispatch]);

  const addRobot = async ({
    name,
    image,
    attributes: { resistance, speed, creationDate },
  }: UnidentifiedRobotStructure) => {
    try {
      await fetch(`${urlApi}/create`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          image: image,
          attributes: {
            resistance: resistance,
            speed: speed,
            creationDate: creationDate,
          },
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      return (error as Error).message;
    }
  };

  return { getRobots, addRobot };
};

export default useApi;
