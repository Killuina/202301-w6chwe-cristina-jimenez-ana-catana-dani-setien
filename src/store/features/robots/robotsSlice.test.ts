import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("Given a robotsReducer function", () => {
  describe("When it receives a list of 2 robots", () => {
    test("Then it should return a list of two robots", () => {
      const robots = [
        {
          id: "henlo",
          name: "CyBot",
          image: "",
          attributes: {
            speed: 3,
            resistance: 4,
            creationDate: "2010-01-01",
          },
        },
      ];

      const expectedRobots = [
        {
          id: "henlo",
          name: "CyBot",
          image: "",
          attributes: {
            speed: 3,
            resistance: 4,
            creationDate: "2010-01-01",
          },
        },
      ];

      const loadRobotsAction = loadRobotsActionCreator(robots);

      const newRobot = robotsReducer(robots, loadRobotsAction);

      expect(newRobot).toStrictEqual(expectedRobots);
    });
  });
});
