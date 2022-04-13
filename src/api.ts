import { from } from "rxjs";

import axios from "axios";

type Res = boolean;

export const getApi = async (): Promise<Res> =>
  axios
    .get("/api", {
      baseURL: "localhost",
    })
    .then((res) => res.data);

export const getApiObservable = from(getApi());

export const responseGetApi = {
  data: true,
};
