import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ApiResponseStructure } from "../data/types";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlice";

const useApi = () => {
  const urlApi = process.env.REACT_APP_URL_API!;

  const dispatch = useDispatch();

  const loadRobots = useCallback(async () => {
    try {
      const response = await fetch(urlApi);

      const robotsFromApi = (await response.json()) as ApiResponseStructure;

      dispatch(loadRobotsActionCreator(robotsFromApi.robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [urlApi, dispatch]);

  return { loadRobots };
};

export default useApi;
