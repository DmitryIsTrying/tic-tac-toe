import { getIdleGames } from "@/entities/game/server";
import { Card, CardTitle } from "@/shared/ui/card";

export async function GamesList() {
  const games = await getIdleGames();

  return (
    <div>
      {games.map((game) => {
        return (
          <Card key={game.id}>
            <CardTitle>Организатор: {game.players[0].login}</CardTitle>
          </Card>
        );
      })}
    </div>
  );
}
