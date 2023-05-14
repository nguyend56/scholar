import React from "react";

const PageContainer = ({ children, ...rest }) => {
  return (
    <div
      className="min-h-screen h-fit pt-[117.5px]"
      {...rest}
    >
      {children}
    </div>
  )
}

export default PageContainer
