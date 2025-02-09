import {
  GameEntity,
  GameIdleEntity,
  GameOverEntity,
} from "@/entities/game/domain";
import { prisma } from "@/shared/lib/db";
import { Game, Prisma, User } from "@prisma/client";
import { z } from "zod";

async function gamesList(where?: Prisma.GameWhereInput): Promise<GameEntity[]> {
  const games = await prisma.game.findMany({
    where,
    include: {
      winner: true,
      players: true,
    },
  });

  return games.map(dbGameToGameEntity);
}

const fieldSchema = z.array(z.union([z.string(), z.null()]));

function dbGameToGameEntity(
  game: Game & {
    players: User[];
    winner?: User | null;
  },
): GameEntity {
  switch (game.status) {
    case "idle": {
      return {
        id: game.id,
        players: game.players,
        status: game.status,
      } satisfies GameIdleEntity;
    }
    case "inProgress":
    case "gameOverDraw": {
      return {
        id: game.id,
        players: game.players,
        status: game.status,
        field: fieldSchema.parse(game.field),
      };
    }

    case "gameOver": {
      if (!game.winner) {
        throw new Error("winner should be in game over");
      }
      return {
        id: game.id,
        players: game.players,
        status: game.status,
        field: fieldSchema.parse(game.field),
        winner: game.winner,
      } satisfies GameOverEntity;
    }
  }
}

export const gameRepository = {
  gamesList,
};
