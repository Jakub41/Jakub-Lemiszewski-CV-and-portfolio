import React from "react";
import Sidebar from "../Sidebar";
import UserHeader from "../UserHeader";
import MobileNav from "../MobileNav";
import Copyright from "../Copyright";

import { StyledContent } from "./styles";

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
      <Copyright />
    </>
  );
};

export default Layout;
