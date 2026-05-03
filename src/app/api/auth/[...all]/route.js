import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handler = toNextJsHandler(auth);
console.log(auth);
export const GET = handler.GET;
export const POST = handler.POST;
