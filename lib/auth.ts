import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import prisma from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    Google({
      async profile({ sub, email, name, picture }) {
        let username = name.trim().toLowerCase().replace(/\s+/g, ".");

        while (await prisma.user.findUnique({ where: { username } })) {
          username = `${username}.${Math.floor(Math.random() * 1000)}`;
        }
        return { id: sub, username, email, name, image: picture };
      },
    }),
  ],
});
