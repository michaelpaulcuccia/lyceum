"use client";
import Image from "next/image";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: relative;
  width: 100vw; // Full viewport width
  height: 100vh; // Full viewport height
  display: flex;
  align-items: center; // Centers content vertically
  justify-content: center; // Centers content horizontally
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%; // Image fills the width of its container
  height: 80vh; // Image height takes up 80% of the viewport height
  margin: 10vh 0; // 10% whitespace on top and bottom
  overflow: hidden; // Ensures the image doesn't overflow
`;

const BackgroundImage = styled(Image)`
  object-fit: cover; // Ensures the image covers its container
  object-position: center; // Centers the image
  width: 100%; // Full width
  height: 100%; // Full height
`;

const TextContainer = styled.div`
  position: absolute; // Position the text on top of the image
  z-index: 1; // Higher z-index to appear above the image
  color: white; // Text color (change based on your design)
  text-align: center; // Center-align text
  top: 50%; // Vertical center
  left: 50%; // Horizontal center
  transform: translate(-50%, -50%); // Offset to center text
`;

export default function HomePage() {
  return (
    <BackgroundContainer>
      <ImageWrapper>
        <BackgroundImage
          src="/images/book_001.jpg" // Replace with your image path
          alt="Background Image"
          layout="fill" // Makes the image cover the entire container
          priority // Optionally add priority to preload the image
        />
        <TextContainer>
          <h1>Your Text Here</h1>
          <p>This text is positioned on top of the background image.</p>
        </TextContainer>
      </ImageWrapper>
    </BackgroundContainer>
  );
}
