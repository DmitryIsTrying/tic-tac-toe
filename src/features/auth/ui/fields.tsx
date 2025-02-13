import { Input } from "@/shared/ui/input";
import { Label } from "@radix-ui/react-label";
import { useId } from "react";

export function AuthFields({
  formData,
  errors,
}: {
  formData?: FormData;
  errors?: { login?: string; password?: string };
}) {
  const loginId = useId();
  const passwordId = useId();

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={loginId}>Login</Label>
        <Input
          autoComplete="username"
          id={loginId}
          type="text"
          placeholder="Enter your login"
          required
          name="login"
          defaultValue={formData?.get("login")?.toString()}
        />
        {errors?.login && (
          <p className="text-sm text-red-500">{errors.login}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor={passwordId}>Password</Label>
        <Input
          autoComplete="current-password"
          id={passwordId}
          type="password"
          placeholder="Enter your password"
          required
          name="password"
          defaultValue={formData?.get("password")?.toString()}
        />
        {errors?.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}
      </div>
    </>
  );
}
