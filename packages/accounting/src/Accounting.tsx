import { GlobalStyles, theme } from "@taxbit/cosmic";
import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore-next-line
import useDashboardUser from "dashboard/useDashboardUser";

const Accounting = () => {
  const user = useDashboardUser();
  return (
    <div>
      Current user's name according to the accounting module: {user?.name}
    </div>
  );
};

export default Accounting;
