import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { FormEventHandler, ReactNode } from "react";

type AuthFormLayoutProps = {
  title: string;
  fields: ReactNode;
  actions: ReactNode;
  link: ReactNode;
  error: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export function AuthFormLayout({
  title,
  actions,
  fields,
  link,
  onSubmit,
  error,
}: AuthFormLayoutProps) {
  return (
    <>
      <h1 className="mb-6 text-center text-3xl font-bold">{title}</h1>
      <Card>
        <form onSubmit={onSubmit}>
          <CardContent className="space-y-4">
            {fields}
            {error}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {actions}
            {link}
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
