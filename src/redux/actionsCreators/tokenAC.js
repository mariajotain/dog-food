import { TOKEN_KEY } from "../types/tokenType";

export const tokenAC = (tokenUserData) => ({
    type: TOKEN_KEY,
    payload: tokenUserData
  });