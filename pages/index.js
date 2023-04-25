import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Home() {
  const { data: session } = useSession();
  if (!session)
    return (
      <div className="bg-blue-900 w-screen h-screen flex justify-center items-center">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 px-4 rounded-lg"
            onClick={() => signOut("google")}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  return (
    <div className="bg-blue-900 w-screen h-screen flex justify-center items-center">
      logged in {session.user.email}
    </div>
  );
}

export default Home;
