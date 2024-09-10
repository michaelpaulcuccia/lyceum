"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Animation for fading in text
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

const SlideUpContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: transparent;
  animation: ${slideUp} 1s ease-out forwards;
  z-index: 4;
`;

const LeftContent = styled.div`
  color: white;
  h1 {
    margin-bottom: 60px;
    font-size: 56px;
    line-height: 56px;
  }
`;

const RightContent = styled.div`
  color: white;
  animation: ${fadeIn} 1s ease-out 1s forwards;

  div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;
    border: 2px solid white;
    border-radius: 50px;
    background-color: transparent;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: white;
      color: black;
    }
  }
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

export default function BackgroundImageWithText() {
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
      <SlideUpContainer>
        <LeftContent>
          <h1>
            LET'S GET LOST <br /> AND READ TOGETHER.
          </h1>
        </LeftContent>
        <RightContent>
          {/* Content for the right side */}
          <div>JOIN OUR CLUB</div>
        </RightContent>
      </SlideUpContainer>
    </FullPageContainer>
  );
}
