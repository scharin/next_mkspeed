import { MK_NAME } from "@/assets/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="row bg-body-tertiary">
      <div className="text-center p-3 fs-6">
        © 2024 Copyright: <Link href="/">{MK_NAME}</Link>
      </div>
    </footer>
  );
};

export default Footer;
