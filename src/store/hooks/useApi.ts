import { useCallback } from "react";
import { ApiResponseStructure } from "../../data/types";

const useApi = () => {
  const urlApi = process.env.REACT_APP_URL_API!;

  const loadRobots = useCallback(async () => {
    try {
      const response = await fetch(urlApi);

      const robotsFromApi = (await response.json()) as ApiResponseStructure;
    } catch (error) {
      return (error as Error).message;
    }
  }, [urlApi]);

  return { loadRobots };
};

export default useApi;
