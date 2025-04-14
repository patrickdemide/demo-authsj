import prisma from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.user.findMany();
  return (
    <div>
      <div>Users</div>
      <div>{JSON.stringify(posts)}</div>
    </div>
  );
}
