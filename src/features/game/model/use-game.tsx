import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { routes } from "@/kernel/routes";
import { useEventsSource } from "@/shared/lib/sse/client";

export function useGame(gameId: GameId) {
  const { dataStream, error, isPending } =
    useEventsSource<GameDomain.GameEntity>(routes.gameStream(gameId));

  return { game: dataStream, isPending };
}
