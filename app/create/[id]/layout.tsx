import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return <div className="mt-10">{children}</div>;
}

export default layout;
