import { GameId } from "./ids";

export const routes = {
  signIn: () => `/sign-in`,
  signUp: () => `/sign-up`,
  game: (id: GameId) => `/game/${id}`,
  gameStream: (id: GameId) => `/game/${id}/stream`,
};
