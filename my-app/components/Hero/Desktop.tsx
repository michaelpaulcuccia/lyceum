import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styled from "styled-components";
import DesktopSlideUp from "./DesktopSlideUp";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { heroData } from "../../constants";

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

  a {
    font-size: 20px;
    line-height: 20px;
    margin-right: 18px;
  }
`;

interface DesktopProps {
  showSlider?: boolean;
  image?: string;
  sliderText?: string;
  showJoinButton?: boolean;
}

export const Desktop: React.FC<DesktopProps> = ({
  showSlider,
  image,
  sliderText,
  showJoinButton,
}) => {
  const [, { pages }] = heroData;

  return (
    <FullPageContainer>
      <DarkenedImage
        src={image || "/images/book_001.jpg"}
        alt="Background Image"
        layout="fill" /* Important for full coverage */
        priority={true}
      />
      <DarkOverlay />
      <TextOverlay>
        <TopTextNav>
          <Link href="/">
            <h1>Lyceum</h1>
          </Link>
          <LinkWrap>
            {pages !== undefined &&
              pages.map((item, i) => (
                <Link key={i} href={item.URL}>
                  {item.pageTitle}
                </Link>
              ))}
          </LinkWrap>
          <LinkWrap>
            <Link href="/login">Login</Link>
          </LinkWrap>
          <LinkWrap>
            <Link href="https://www.instagram.com/" target="_blank">
              <FaInstagram color="white" />
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <FiYoutube color="white" />
            </Link>
          </LinkWrap>
        </TopTextNav>
      </TextOverlay>
      {showSlider && (
        <DesktopSlideUp
          sliderText={sliderText || "LET'S GET LOST AND READ TOGETHER"}
          showJoinButton={showJoinButton || false}
        />
      )}
    </FullPageContainer>
  );
};

export default Desktop;
