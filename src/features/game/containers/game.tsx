import { GameDomain } from "@/entities/game";
import { GameField } from "@/features/game/ui/field";
import { GameLayout } from "@/features/game/ui/layout";
import { GamePlayers } from "@/features/game/ui/players";
import { GameStatus } from "@/features/game/ui/status";
import { GameId } from "@/kernel/ids";

export function Game({ gameId }: { gameId: GameId }) {
  const game: GameDomain.GameEntity = {
    id: "1",
    players: [
      { id: "1", login: "test1", rating: 1000 },
      { id: "2", login: "test2", rating: 50 },
    ],
    status: "inProgress",
    field: [null, null, null, "X", "O", null, "X", null, "O"],
  };

  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
    />
  );
}
