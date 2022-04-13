import axios from "axios";
import { getApi, responseGetApi } from "./api";
jest.mock("axios");

describe("api.spec", () => {
  it("should", () => {
    expect(0).toBe(0);
  });

  it("should", async () => {
    expect(0).toBe(0);
    (axios.get as jest.Mock).mockResolvedValue(responseGetApi);

    const res = await getApi();
    expect(res).toBe(true);
  });
});
