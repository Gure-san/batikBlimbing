// lib
import { customAlphabet } from "nanoid";

function generateId(): string {
  const alphabet =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-';
  const nanoId = customAlphabet(alphabet, 10);
  return nanoId();
}

export {
  generateId,
}