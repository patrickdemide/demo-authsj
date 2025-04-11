import { auth, signIn, signOut } from "@/auth";

export default async function SignIn() {
  const session = await auth();

  return (
    <div>
      {session?.user ? (
        <div>
          <div>{JSON.stringify(session.user, null, 2)}</div>
          <img src={session.user.image || ""} />

          <div>{session.user.username}</div>

          <div>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button type="submit">SignOut</button>
            </form>
          </div>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button type="submit">Signin with Google</button>
        </form>
      )}
    </div>
  );
}
