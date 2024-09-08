"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { title: "Register", path: "/register" },
  { title: "Login", path: "/login" },
  { title: "Forgot Password", path: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.path);
        return (
          <Link
            key={link.path}
            href={link.path}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.title}
          </Link>
        );
      })}
      <h1>Authentication</h1>
      {children}
    </>
  );
}
