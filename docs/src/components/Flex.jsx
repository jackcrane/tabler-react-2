import React from "react";

export const Flex = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
