import { LoginButton, LogoutButton } from "~/components/auth/login-button";
import { getSession } from "~/lib/session";

export default async function HomePage() {
  const session = await getSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">Clearity</span> V2
        </h1>
        
        {session ? (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 rounded-xl bg-white/10 p-6">
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name}
                  className="h-12 w-12 rounded-full"
                />
              )}
              <div>
                <h2 className="text-xl font-bold">Welcome, {session.user.name}!</h2>
                <p className="text-sm text-gray-300">EVE Online Pilot</p>
              </div>
            </div>
            <LogoutButton />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-gray-300">
              Sign in with your EVE Online account to continue
            </p>
            <LoginButton />
          </div>
        )}
      </div>
    </main>
  );
}
