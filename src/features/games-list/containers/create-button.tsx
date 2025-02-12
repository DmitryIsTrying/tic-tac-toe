"use client";

import { createGameAction } from "@/features/games-list/actions/create-game";
import { mapLeft, right } from "@/shared/lib/either";
import { useActionState } from "@/shared/lib/react";
import { Button } from "@/shared/ui/button";
import { startTransition } from "react";

export function CreateButton() {
  const [data, dispatch, isPending] = useActionState(
    createGameAction,
    right(undefined),
  );

  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(dispatch)}
      result={mapLeft(
        data,
        (e) =>
          ({
            ["can-create-only-one-game"]: "Вы можете создать только одну игру",
            ["user-not-found"]: "Пользователя нет",
          })[e],
      )}
    >
      Создать игру
    </Button>
  );
}
