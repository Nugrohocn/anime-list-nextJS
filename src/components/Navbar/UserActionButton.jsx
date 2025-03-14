import Link from "next/link";
import Image from "next/image";
import { AuthUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await AuthUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex items-center">
      {user ? (
        <div className="flex items-center gap-4">
          <Link
            href={actionURL}
            className="px-3 py-1 text-sm rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-colors"
          >
            {actionLabel}
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium hidden md:inline">
              {user.name}
            </span>
            <Link href={"/user/dashboard"} className="flex items-center">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500 transition-transform hover:scale-105">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt="Profile Picture"
                    width={36}
                    height={36}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium">
                    {user.name?.charAt(0) || "U"}
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <Link
          href={actionURL}
          className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default UserActionButton;
