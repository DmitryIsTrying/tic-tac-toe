import { Button } from "@/shared/ui/button";
import { ReactNode } from "react";

export function SubmitButton({
  children,
  isPending,
}: {
  children: ReactNode;
  isPending: boolean;
}) {
  return (
    <Button disabled={isPending} type="submit" className="w-full">
      {children}
    </Button>
  );
}
