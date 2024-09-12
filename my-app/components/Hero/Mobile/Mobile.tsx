import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import styled from "styled-components";
import MobileHamburger from "./MobileHamburger";
import MobileMenu from "./MobileMenu";

const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  padding: 20px;
  width: 100%;
  color: white;
  z-index: 3; /* Text stays on top of everything */
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 40px;
    line-height: 40px;
  }
`;

interface MobileProps {
  image?: string;
}

export const Mobile: React.FC<MobileProps> = ({ image }) => {
  const [isopen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isopen);
  };

  return (
    <Root>
      <DarkenedImage
        src={image || "/images/book_001.jpg"}
        alt="Background Image"
        layout="fill" /* Important for full coverage */
        priority={true}
      />
      <DarkOverlay />
      <TextOverlay>
        <TopContainer>
          <Link href="/">
            <h1>Lyceum</h1>
          </Link>
          <MobileHamburger isOpen={isopen} toggle={toggleMenu} />
        </TopContainer>
      </TextOverlay>
      {isopen && <MobileMenu />}
    </Root>
  );
};

export default Mobile;
