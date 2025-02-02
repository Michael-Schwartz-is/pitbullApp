"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function ActiveLink({
  href,
  children,
  icon,
  label,
  notification,
  className = "flex flex-col items-center justify-center",
  activeClass = "text-orange-500 rounded-md",
  ...props
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex w-[3rem] relative text-xs flex-col items-center ${
        isActive ? activeClass : ""
      }`.trim()}
      {...props}
    >
      {notification && (
        <div className="absolute flex items-center justify-center top-0 right-2">
          <div className={`w-[12px] h-[12px] animate-ping absolute rounded-full bg-red-600`} />
          <div className={`w-[6px] h-[6px]  absolute  rounded-full bg-red-600`} />
        </div>
      )}
      {icon}
      {label}
      <div className={`w-[4px] h-[4px] relative rounded-full ${isActive && "bg-orange-600"}`}></div>
    </Link>
  );
}

export default ActiveLink;
