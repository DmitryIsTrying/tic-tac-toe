import { Either, matchEither } from "@/shared/lib/either";

export function ErrorField({ error }: { error: Either<string, null> }) {
  return matchEither(error, {
    left: (error) => <p className="text-sm text-red-500">{error}</p>,
    right: () => null,
  });
}
