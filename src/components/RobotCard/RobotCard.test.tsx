import { render, screen } from "@testing-library/react";
import RobotCard from "./RobotCard";

describe("Given the RobotCard component", () => {
  describe("when it receives a robot with name 'WALLE-E'", () => {
    test("Then it should show 'WALLE-E' on a heading", () => {
      const robot = {
        id: "63efcf45e871c66135a96f55",
        name: "WALLE-E",
        image:
          "https://variety.com/wp-content/uploads/2022/09/Pixar-Wall-E.jpg?w=681&h=383&crop=1",
        attributes: { speed: 2, resistance: 3, creationDate: "2022/22" },
      };
      const expectedName = "WALLE-E";

      render(<RobotCard robot={robot} />);

      const robotCardWithNameWallE = screen.getByRole("heading", {
        name: expectedName,
      });

      expect(robotCardWithNameWallE).toBeInTheDocument();
    });
    test("Then it should show an image with alt text 'WALLE-E", () => {
      const robot = {
        id: "63efcf45e871c66135a96f55",
        name: "WALLE-E",
        image:
          "https://variety.com/wp-content/uploads/2022/09/Pixar-Wall-E.jpg?w=681&h=383&crop=1",
        attributes: { speed: 2, resistance: 3, creationDate: "2022/22" },
      };
      const expectedAltText = "WALLE-E";

      render(<RobotCard robot={robot} />);

      const robotCardWithNameWallE = screen.getByAltText(expectedAltText);

      expect(robotCardWithNameWallE).toBeInTheDocument();
    });
  });
});
