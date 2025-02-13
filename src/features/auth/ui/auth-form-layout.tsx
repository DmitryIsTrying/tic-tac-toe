import { Card, CardContent, CardFooter } from "@/shared/ui/card";
import { ReactNode } from "react";

type AuthFormLayoutProps = {
  title: string;
  fields: ReactNode;
  actions: ReactNode;
  link: ReactNode;
  error: ReactNode;
  action: (formData: FormData) => void;
};

export function AuthFormLayout({
  title,
  actions,
  fields,
  link,
  action,
  error,
}: AuthFormLayoutProps) {
  return (
    <>
      <h1 className="mb-6 text-center text-3xl font-bold">{title}</h1>
      <Card>
        <form action={action}>
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
