import React from "react";
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

const SlideUpContainer = styled.div`
  position: absolute;
  top: 75px;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  animation: ${slideUp} 1s ease-out forwards;
  z-index: 4;
`;

export default function MobileMenu() {
  return <SlideUpContainer>MobileMenu</SlideUpContainer>;
}
