"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

function BackButton({ text }) {
  const router = useRouter();
  return (
    <button
      className="flex gap-1 p-1 px-3 rounded-full mb-3 bg-orange-500 text-white text-sm items-center"
      onClick={() => router.back()}
    >
      <div>{<ArrowRight size={16} />}</div>
      <span>{text}</span>
    </button>
  );
}
export default BackButton;
