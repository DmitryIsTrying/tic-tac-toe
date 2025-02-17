"use client";

import { signInAction, SignInFormState } from "@/features/auth/actions/sign-in";
import { AuthFormLayout } from "@/features/auth/ui/auth-form-layout";
import { AuthFormLink } from "@/features/auth/ui/auth-form-link";
import { ErrorField } from "@/features/auth/ui/error-field";
import { AuthFields } from "@/features/auth/ui/fields";
import { SubmitButton } from "@/features/auth/ui/submit-button";
import { routes } from "@/kernel/routes";
import { useActionState } from "@/shared/lib/react";

export function SignInForm() {
  const [formState, action, isPending] = useActionState(
    signInAction,
    {} as SignInFormState,
  );

  return (
    <AuthFormLayout
      title="Sign In"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Sign In</SubmitButton>}
      error={<ErrorField error={formState.errors?._errors} />}
      link={
        <AuthFormLink
          linkText="Sign up"
          text="Don't have an account?"
          url={routes.signUp()}
        />
      }
    />
  );
}
