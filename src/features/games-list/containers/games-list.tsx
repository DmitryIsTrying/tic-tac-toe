import { getIdleGames } from "@/entities/game/server";
import { CreateButton } from "@/features/games-list/containers/create-button";

import { GameCard } from "@/features/games-list/ui/game-card";
import { Layout } from "@/features/games-list/ui/layout";

export async function GamesList() {
  const games = await getIdleGames();

  return (
    <Layout actions={<CreateButton />}>
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
        />
      ))}
    </Layout>
  );
}
