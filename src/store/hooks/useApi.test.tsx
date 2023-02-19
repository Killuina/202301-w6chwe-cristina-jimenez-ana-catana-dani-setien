import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import { Wrapper } from "../../mocks/Wrapper";

const mockDispatcher = jest.fn();

jest.mock("../hooks", () => ({
  ...jest.requireActual("../hooks"),
  useAppDispatch: () => mockDispatcher,
}));

describe.skip("Given the useApi custom hook", () => {
  describe("When the getRobots function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { loadRobots },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await loadRobots();

      expect(mockDispatcher).toHaveBeenCalled();
    });
  });
});
