import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { User2Icon } from "lucide-react";

export default function LogoutForm() {
  return (
    <Button
      variant="outline"
      type="submit"
      onClick={() =>
        signOut({
          redirectTo: "/login",
        })
      }
    >
      Logout
      <User2Icon />
    </Button>
  );
}
