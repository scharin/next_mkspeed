import { MK_NAME } from "@/assets/constants";
import React from "react";

export const metadata = {
  title: `Nyheter - ${MK_NAME}`,
};

const NewsLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default NewsLayout;
