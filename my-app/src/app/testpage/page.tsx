"use client";
import styled from "styled-components";
import Image from "next/image";

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
  background: rgba(0, 0, 0, 0.2); /*  20% opacity */
  z-index: 2; /* Overlay stays below the text */
  pointer-events: none; /* Ensures overlay does not block text or other elements */
`;

const TextOverlay = styled.div`
  position: absolute;
  color: white;
  z-index: 3; /* Text stays on top of everything */
`;

export default function BackgroundImageWithText() {
  return (
    <FullPageContainer>
      <DarkenedImage
        src="/images/reading_002.jpg"
        alt="Background Image"
        layout="fill" /* Important for full coverage */
      />
      <DarkOverlay />
      <TextOverlay>
        <h1>Your Text Here</h1>
      </TextOverlay>
    </FullPageContainer>
  );
}
