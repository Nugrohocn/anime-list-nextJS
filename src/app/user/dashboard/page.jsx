import { AuthUserSession } from "@/libs/auth-libs";
import React from "react";
import Image from "next/image";

const Page = async () => {
  const user = await AuthUserSession();

  return (
    <div className="text-white">
      <h1>Halaman Dashboard</h1>
      <h3>Welcome, {user.name}</h3>
      <Image src={user.image} width={250} height={250} alt="..." />
    </div>
  );
};

export default Page;
