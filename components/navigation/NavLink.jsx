import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, name }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`nav-link${pathname === href ? " active" : ""}`}
      href={href}
    >
      {name}
    </Link>
  );
};

export default NavLink;
