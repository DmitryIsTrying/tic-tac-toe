"use server";

import { sessionService, verityUserPassword } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type SignInFormState = {
  formData?: FormData;
  errors?: {
    login?: string;
    password?: string;
    _errors?: string;
  };
};

const formdataSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(3),
});

export const signInAction = async (
  state: unknown,
  formData: FormData,
): Promise<SignInFormState> => {
  const data = Object.fromEntries(formData.entries());
  const result = formdataSchema.safeParse(data);

  if (!result.success) {
    const formatErrors = result.error.format();
    return {
      formData,
      errors: {
        login: formatErrors.login?._errors.join(", "),
        password: formatErrors.password?._errors.join(", "),
      },
    };
  }

  const verifyUserResult = await verityUserPassword(result.data);

  if (verifyUserResult.type === "right") {
    await sessionService.addSession(verifyUserResult.value);

    redirect("/");
  }

  const errors = { "wrong-login-or-password": "Неверный логин или пароль" }[
    verifyUserResult.error
  ];

  return {
    formData,
    errors: {
      _errors: errors,
    },
  };
};
