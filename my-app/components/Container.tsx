"use client";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export default function Container({ children }: any) {
  return (
    <Root>
      <FlexWrapper>{children}</FlexWrapper>
    </Root>
  );
}
