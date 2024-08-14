"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    router.push("/");
  };

  let button;
  switch (pathname) {
    case "/login":
      button = null;
      break;
    case "/dashboard":
    case "/dashboard/images-result":
      button = (
        <button onClick={handleLogout} className={styles.loginLink}>
          Logout
        </button>
      );
      break;
    default:
      button = (
        <Link href="/login" passHref className={styles.loginLink}>
          Login
        </Link>
      );
      break;
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link href="/" passHref>
          <Image
            className={styles.logo}
            src="/assets/Digpatho_logo.png"
            alt="DigPath Logo"
            width={150}
            height={50}
          />
        </Link>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        {button}
      </div>
    </nav>
  );
}
