import prisma from "@/lib/prisma";

export const revalidate = 60;

export default async function Home() {
  const posts = await prisma.user.findMany();
  return (
    <div>
      <div>Users</div>
      <div>{JSON.stringify(posts)}</div>
    </div>
  );
}
