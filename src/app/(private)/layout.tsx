import { sessionService } from "@/entities/user/server";
import { routes } from "@/kernel/routes";
import { Button } from "@/shared/ui/button";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function PrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { session } = await sessionService.verifySession();

  const handleLogout = async () => {
    "use server";
    sessionService.deleteSession();
    redirect(routes.signIn());
  };

  return (
    <div className="flex flex-col grow">
      <header className="px-10 py-4 flex flex-row gap-4 justify-between border-b border-b-primary/50 items-center">
        <div className="text-xl">Tik-Tak-Toe Online</div>
        <div className="flex items-center gap-4">
          <div className="text-lg">{session.login}</div>
          <Button onClick={handleLogout}>Sign out</Button>
        </div>
      </header>
      {children}
    </div>
  );
}
