import React from "react";
import CommonLayout from "../../components/CommonLayout";
import HomeFooter from "./HomeFooter";
import Profile from "./Profile";

function IndexHome() {
  return (
    <React.Fragment>
      <CommonLayout>
        <Profile />
        <HomeFooter />
      </CommonLayout>
    </React.Fragment>
  );
}
export default IndexHome;
