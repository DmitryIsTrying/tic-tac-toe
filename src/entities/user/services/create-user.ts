import { DEFAULT_RATING } from "@/entities/user/domain";
import { userRepository } from "@/entities/user/repositories/user";
import { passwordService } from "@/entities/user/services/password";
import { left, right } from "@/shared/lib/either";
import cuid from "cuid";

export const createUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const userWithLogin = await userRepository.getUser({ login });

  if (userWithLogin) {
    return left("user-login-exists" as const);
  }

  const { hash, salt } = passwordService.hashPassword(password);

  const user = await userRepository.saveUser({
    id: cuid(),
    login: login.toLowerCase(),
    salt,
    rating: DEFAULT_RATING,
    passwordHash: hash,
  });

  return right(user);
};
