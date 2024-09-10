import React from "react";
import Image from "next/legacy/image";
import styled from "styled-components";

const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
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

interface MobileProps {
  image?: string;
}

export const Mobile: React.FC<MobileProps> = ({ image }) => {
  return (
    <Root>
      <DarkenedImage
        src={image || "/images/book_001.jpg"}
        alt="Background Image"
        layout="fill" /* Important for full coverage */
        priority={true}
      />
      <DarkOverlay />
    </Root>
  );
};

export default Mobile;
