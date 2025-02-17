import { getIdleGames } from "@/entities/game/server";
import { CreateButton } from "@/features/games-list/containers/create-button";

import { GameCard } from "@/features/games-list/ui/game-card";
import { Layout } from "@/features/games-list/ui/layout";
import { routes } from "@/kernel/routes";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

export async function GamesList() {
  const games = await getIdleGames();

  return (
    <Layout actions={<CreateButton />}>
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
          actions={
            <Link href={routes.game(game.id)}>
              <Button>Подключиться</Button>
            </Link>
          }
        />
      ))}
    </Layout>
  );
}
