import React from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

export default function SlideUp() {
  return (
    <SlideUpContainer>
      <LeftContent>
        <h1>
          LET'S GET LOST <br /> AND READ TOGETHER.
        </h1>
      </LeftContent>
      <RightContent>
        <Link href="login">JOIN OUR CLUB</Link>
      </RightContent>
    </SlideUpContainer>
  );
}
