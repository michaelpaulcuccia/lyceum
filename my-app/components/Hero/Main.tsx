import React from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../../constants";
import Desktop from "./Desktop";

interface MainProps {
  showSlider: boolean;
}

const DesktopWrapper = styled.span`
  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

const MobileWrapper = styled.span`
  display: none;
  @media (max-width: ${mobileBreakpoint}) {
    display: block;
  }
`;

const Main: React.FC<MainProps> = ({ showSlider }) => {
  return (
    <>
      <DesktopWrapper>
        <Desktop showSlider={showSlider} />
      </DesktopWrapper>
      <MobileWrapper>
        <div>hello world</div>
      </MobileWrapper>
    </>
  );
};

export default Main;
