import { pbkdf2Sync, randomBytes } from "node:crypto";

function hashPassword(
  password: string,
  salt = randomBytes(16).toString("hex"),
) {
  const hash = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return { hash, salt };
}

function comparePassword({
  password,
  hash,
  salt,
}: {
  password: string;
  hash: string;
  salt: string;
}) {
  return hash === hashPassword(password, salt).hash;
}

export const passwordService = { comparePassword, hashPassword };
