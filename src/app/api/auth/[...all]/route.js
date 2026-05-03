import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handler = toNextJsHandler(auth);
console.log(auth);
export const { GET, POST } = toNextJsHandler(auth);
