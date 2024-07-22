import type { letter } from "./letter.js";
import type { digit } from "./digit.js";

export type base64char =
  | letter
  | digit
  | "+"
  | "/";
export type base64paddedchar =
  | base64char
  | "=";
