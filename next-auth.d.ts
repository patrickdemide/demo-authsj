import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
  }

  interface Session {
    user: User & DefaultSession["user"];
  }
}
