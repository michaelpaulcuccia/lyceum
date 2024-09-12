import React from "react";
import styled, { css } from "styled-components";

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

const Line = styled.span<{ isopen: boolean }>`
  width: 100%;
  height: 4px;
  background-color: white;
  transition: transform 0.3s ease, opacity 0.3s ease;
  position: absolute;

  &:nth-child(1) {
    top: 0;
    ${({ isopen }) =>
      isopen &&
      css`
        transform: rotate(315deg);
        top: 8px;
      `}
  }

  &:nth-child(2) {
    top: 16px;
    ${({ isopen }) =>
      isopen &&
      css`
        transform: rotate(-315deg);
        top: 8px;
      `}
  }
`;

interface MobileHamburgerProps {
  isopen: boolean;
  toggle: () => void;
}

const MobileHamburger: React.FC<MobileHamburgerProps> = ({
  isopen,
  toggle,
}) => {
  return (
    <HamburgerButton onClick={toggle}>
      <Line isopen={isopen} />
      <Line isopen={isopen} />
    </HamburgerButton>
  );
};

export default MobileHamburger;

/*
Lift the State Up: Move the isopen state from the Hamburger component to the parent component (Mobile) so that it can control whether the menu is open or closed.

Pass State and Props to the Hamburger Component: Pass down the state and a function to toggle the state to the Hamburger component.

Conditionally Render the Component: Use the isOpen state in the parent component to conditionally render the menu or any other component you'd like to display.

1. Update Hamburger Component
Update the Hamburger component to accept isOpen and toggle props from the parent component:

2. Update Mobile Component to Lift State and Pass Props
Lift the state to Mobile and pass the necessary props to Hamburger:

State Management (isOpen): The isOpen state is managed in the Mobile component.
Passing Props to Hamburger: The Hamburger component receives the isOpen state and a toggle function to change the state.
Conditional Rendering: The menu or any content you'd like to show when the hamburger is open is conditionally rendered in the Mobile component using {isOpen && <div>Menu Content Goes Here</div>}.

The toggle: () => void; annotation means the toggle prop is a function that doesn’t accept any arguments and doesn’t return anything. This is commonly used in TypeScript to provide clear type definitions for components and their props, ensuring type safety and better developer experience.
*/
