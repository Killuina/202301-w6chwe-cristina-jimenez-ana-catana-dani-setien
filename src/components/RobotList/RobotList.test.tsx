import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../mocks/Wrapper";
import RobotList from "./RobotList";

const expectedRobots = [
  {
    id: "1",
    name: "Hamena",
    image: "",
    attributes: {
      speed: 10,
      resistance: 10,
      creationDate: "Today",
    },
  },
  {
    id: "2",
    name: "Johnny",
    image: "",
    attributes: {
      speed: 9,
      resistance: 9,
      creationDate: "Yesterday",
    },
  },
];

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => expectedRobots,
}));

describe("Given a RobotList component", () => {
  describe("When it receives a list of 2 games", () => {
    test("Then it should show 2 game cards", () => {
      render(
        <Wrapper>
          <RobotList />
        </Wrapper>
      );

      const resultingRobots = screen.getAllByRole("listitem");

      resultingRobots.forEach((robot) => expect(robot).toBeInTheDocument());
    });
  });
});
