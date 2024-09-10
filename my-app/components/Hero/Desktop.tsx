import React from "react";
import Image from "next/image";
import styled from "styled-components";
import SlideUp from "./SlideUp";

const FullPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10vh 0;
`;

const DarkenedImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35); /*  35% opacity */
  z-index: 2; /* Overlay stays below the text */
  pointer-events: none; /* Ensures overlay does not block text or other elements */
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 60px;
  width: 100%;
  color: white;
  z-index: 3; /* Text stays on top of everything */
`;

const TopTextNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 56px;
    line-height: 56px;
  }
`;

const LinkWrap = styled.div`
  display: flex;

  div {
    font-size: 20px;
    line-height: 20px;
    margin-right: 18px;
  }
`;

interface DesktopProps {
  showSlider?: boolean;
}

export const Desktop: React.FC<DesktopProps> = ({ showSlider }) => {
  console.log(showSlider);
  return (
    <FullPageContainer>
      <DarkenedImage
        src="/images/library_001.jpg"
        alt="Background Image"
        layout="fill" /* Important for full coverage */
      />
      <DarkOverlay />
      <TextOverlay>
        <TopTextNav>
          <h1>Lyceum</h1>
          <LinkWrap>
            <div>Who</div>
            <div>What</div>
            <div>When</div>
            <div>Where</div>
          </LinkWrap>
          <LinkWrap>
            <div>Login</div>
          </LinkWrap>
          <LinkWrap>
            <div>IG</div>
            <div>Tube</div>
          </LinkWrap>
        </TopTextNav>
      </TextOverlay>
      {showSlider && <SlideUp />}
    </FullPageContainer>
  );
};

export default Desktop;
