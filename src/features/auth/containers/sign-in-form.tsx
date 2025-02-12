"use client";

import { AuthFormLayout } from "@/features/auth/ui/auth-form-layout";
import { AuthFormLink } from "@/features/auth/ui/auth-form-link";
import { ErrorField } from "@/features/auth/ui/error-field";
import { AuthFields } from "@/features/auth/ui/fields";
import { SubmitButton } from "@/features/auth/ui/submit-button";
import { right } from "@/shared/lib/either";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignInForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!login || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Here you would typically call your authentication service
    // For this example, we'll just simulate a successful sign-up
    console.log("Sign up with", login, password);
    router.push("/dashboard"); // Redirect to dashboard after sign-up
  };
  return (
    <AuthFormLayout
      title="Sign In"
      onSubmit={handleSubmit}
      fields={
        <AuthFields
          login={login}
          onChangeLogin={setLogin}
          onChangePassword={setPassword}
          password={password}
        />
      }
      actions={<SubmitButton>Sign In</SubmitButton>}
      error={<ErrorField error={right(null)} />}
      link={
        <AuthFormLink
          linkText="Sign up"
          text="Don't have an account?"
          url="/sign-up"
        />
      }
    />
  );
}
