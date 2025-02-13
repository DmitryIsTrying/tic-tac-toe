import { userRepository } from "@/entities/user/repositories/user";
import { passwordService } from "@/entities/user/services/password";
import { left, right } from "@/shared/lib/either";

export async function verityUserPassword({
  login,
  password,
}: {
  login: string;
  password: string;
}) {
  const user = await userRepository.getUser({ login: login.toLowerCase() });

  if (!user) {
    return left("wrong-login-or-password" as const);
  }

  const isCompare = passwordService.comparePassword({
    hash: user.passwordHash,
    salt: user.salt,
    password,
  });

  if (!isCompare) {
    return left("wrong-login-or-password" as const);
  }

  return right(user);
}
