import { GameDomain } from "@/entities/game";

export function GameStatus({ game }: { game: GameDomain.GameEntity }) {
  switch (game.status) {
    case "idle":
      return <div className="text-lg">Ожидание игрока</div>;

    case "gameOverDraw":
      return <div className="text-lg">Ничья</div>;

    case "inProgress": {
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      return <div className="text-lg">Ходит: {currentSymbol}</div>;
    }
    case "gameOver": {
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      return <div className="text-lg">Победитель: {currentSymbol}</div>;
    }
  }
}
