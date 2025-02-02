"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

function BackButton({ text }) {
  const router = useRouter();
  return (
    <button className="flex gap-1 text-stone-600 items-center" onClick={() => router.back()}>
      <div>{<ArrowRight size={16} />}</div>
      <span>{text}</span>
    </button>
  );
}
export default BackButton;
