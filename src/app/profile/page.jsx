"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="py-10">
      <Card className="max-w-96 mx-auto flex flex-col items-center border p-6 gap-3">
        
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted-foreground">{user?.email}</p>

        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default ProfilePage;