import React from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

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

const SlideUpContainer = styled.div`
  position: absolute;
  top: 75px;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  animation: ${slideUp} 1s ease-out forwards;
  z-index: 4;
  font-size: 28px;
`;

export default function MobileMenu() {
  return (
    <SlideUpContainer>
      <Link href="/who" style={{ marginBottom: "22px" }}>
        Who
      </Link>
      <Link href="/what" style={{ marginBottom: "22px" }}>
        What
      </Link>
      <Link href="/when" style={{ marginBottom: "22px" }}>
        When
      </Link>
      <Link href="/where" style={{ marginBottom: "22px" }}>
        Where
      </Link>
      <br />
      <Link href="/login" style={{ marginBottom: "22px" }}>
        Login
      </Link>
      <br />
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-evenly",
        }}
      >
        <Link href="https://www.instagram.com/" target="_blank">
          <FaInstagram fontSize={34} />
        </Link>
        {"  "}
        <Link href="https://www.youtube.com/" target="_blank">
          <FiYoutube fontSize={34} />
        </Link>
      </div>
    </SlideUpContainer>
  );
}
