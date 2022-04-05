/** @format */

import React from "react";
import { Column } from "../components";
import { Navbar } from "../components";
import { ReposContext } from "../context/context";
import loadingImg from "../images/preloader.gif";
function Dashboard() {
  // const { isLoading } = React.useContext(ReposContext);
  // if (isLoading) {
  //   return (
  //     <main>
  //       <img src={loadingImg} className="loading-img" alt="loading" />
  //     </main>
  //   );
  // }
  return (
    <main>
      <Column />;
    </main>
  );
}

export default Dashboard;
