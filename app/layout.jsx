import "@/assets/styles/globals.min.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/Navbar";
import React from "react";

export const metadata = {
  title: "MK Speeds",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="container-xl shadow">
        <div className="wrapper">
          <header className="header row">
            <Navbar />
          </header>
          <div className="row">
            <div className="col-12">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
