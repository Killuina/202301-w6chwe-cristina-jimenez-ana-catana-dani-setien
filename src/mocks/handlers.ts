import { rest } from "msw";
import { robotsHardcoded } from "../store";

const apiUrl = process.env.REACT_APP_URL_API!;

export const handlers = [
  rest.get(`${apiUrl}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        next: "",
        previous: "",
        results: robotsHardcoded,
      })
    );
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}`, (_req, rest, ctx) => {
    return rest(ctx.status(500), ctx.json(null));
  }),
];
