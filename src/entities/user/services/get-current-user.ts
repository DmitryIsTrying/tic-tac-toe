import { userRepository } from "@/entities/user/repositories/user";
import { sessionService } from "@/entities/user/server";

export const getCurrentUser = async () => {
  const { session } = await sessionService.verifySession();
  return userRepository.getUser({ id: session.id });
};
