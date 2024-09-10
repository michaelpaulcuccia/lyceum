import React, { useState } from "react";
import styled, { css } from "styled-components";

const HamburgerButton = styled.button`
  position: relative;
  width: 40px;
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

const Line = styled.span<{ isOpen: boolean }>`
  width: 100%;
  height: 3px;
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

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerButton onClick={handleClick}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </HamburgerButton>
  );
};

export default Hamburger;
