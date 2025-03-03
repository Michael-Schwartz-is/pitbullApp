"use server";

import { Button } from "@/components/ui/button";

function LogoutForm() {
  return (
    <form
      className="p-4"
      action={async () => {
        await signOut();
      }}
    >
      <Button variant="outline" type="submit">
        Logout
      </Button>
    </form>
  );
}
export default LogoutForm;
