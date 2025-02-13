"use server";

import { createUser, sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type SignUpFormState = {
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

export const signUpAction = async (
  state: SignUpFormState,
  formData: FormData,
): Promise<SignUpFormState> => {
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

  const createUserResult = await createUser(result.data);

  if (createUserResult.type === "right") {
    await sessionService.addSession(createUserResult.value);

    redirect("/");
  }

  const errors = { "user-login-exists": "Пользователь уже существует" }[
    createUserResult.error
  ];

  return {
    formData,
    errors: {
      _errors: errors,
    },
  };
};
