import React from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../../constants";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

interface MainProps {
  showSlider: boolean;
  image: string;
  sliderText: string;
  showJoinButton?: boolean;
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

const Main: React.FC<MainProps> = ({
  showSlider,
  image,
  sliderText,
  showJoinButton,
}) => {
  return (
    <>
      <DesktopWrapper>
        <Desktop
          showSlider={showSlider}
          image={image}
          sliderText={sliderText}
          showJoinButton={showJoinButton}
        />
      </DesktopWrapper>
      <MobileWrapper>
        <Mobile image={image} />
      </MobileWrapper>
    </>
  );
};

export default Main;
