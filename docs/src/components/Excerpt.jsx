import React from "react";
import styled from "styled-components";
import { Tabler } from "./Tabler";
export { Flex } from "./Flex";

const _Excerpt = styled.div`
  background: white;
  background-image: radial-gradient(#e4e4e4 1px, transparent 0);
  background-size: 20px 20px;
  background-position: -19px -19px;
  border: 1.5px solid #e4e4e4;
  border-radius: 5px;
  min-height: 100px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  overflow: auto;
`;

export const Excerpt = ({ children, f }) => {
  return (
    <_Excerpt>
      <Tabler>
        {f ? (
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
        ) : (
          children
        )}
      </Tabler>
    </_Excerpt>
  );
};
