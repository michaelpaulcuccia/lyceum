// Hamburger.tsx
import React from "react";
import styled, { css } from "styled-components";

// Hamburger button container
const HamburgerButton = styled.button`
  position: relative;
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10; /* Ensures it is above other content */
`;

// Common style for the lines
const Line = styled.span<{ isOpen: boolean }>`
  width: 100%;
  height: 4px;
  background-color: white;
  transition: transform 0.3s ease, opacity 0.3s ease;
  position: absolute;

  &:nth-child(1) {
    top: 0;
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(45deg);
        top: 8px;
      `}
  }

  &:nth-child(2) {
    top: 16px;
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(-45deg);
        top: 8px;
      `}
  }
`;

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle }) => {
  return (
    <HamburgerButton onClick={toggle}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </HamburgerButton>
  );
};

export default Hamburger;
