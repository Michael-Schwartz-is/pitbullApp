import { LoginEmail } from "@/components/Login-email";

export default function LoginPage() {
  return (
    <div
      className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-gradient-to-tr from-orange-500
     to-orange-300"
    >
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginEmail />
      </div>
    </div>
  );
}
