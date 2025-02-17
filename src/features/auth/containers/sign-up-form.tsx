"use client";

import { signUpAction, SignUpFormState } from "@/features/auth/actions/sign-up";
import { AuthFormLayout } from "@/features/auth/ui/auth-form-layout";
import { AuthFormLink } from "@/features/auth/ui/auth-form-link";
import { ErrorField } from "@/features/auth/ui/error-field";
import { AuthFields } from "@/features/auth/ui/fields";
import { SubmitButton } from "@/features/auth/ui/submit-button";
import { routes } from "@/kernel/routes";
import { useActionState } from "@/shared/lib/react";

export function SignUpForm() {
  const [formState, action, isPending] = useActionState(
    signUpAction,
    {} as SignUpFormState,
  );

  return (
    <AuthFormLayout
      title="Sign Up"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Sign Up</SubmitButton>}
      error={<ErrorField error={formState.errors?._errors} />}
      link={
        <AuthFormLink
          linkText="Sign in"
          text="Already have an account?"
          url={routes.signIn()}
        />
      }
    />
  );
}
