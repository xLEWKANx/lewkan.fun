import { useState } from "react"
import styled, { css } from "styled-components"

const openState = css`
  .menu-icon:nth-child(2) {
    opacity: 0;
    z-index: -1;
  }

  .menu-icon:nth-child(1) {
    transform: translateY(350%) rotate(calc(2 * 360deg + 45deg));
  }

  .menu-icon:nth-child(3) {
    transform: translateY(-350%) rotate(calc(2 * -360deg + -45deg));
  }
`

const BurgerContainer = styled.button`
  --header-height: 135px;

  background: none;
  border: none;
  width: 130px;
  height: var(--header-height);
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .menu-icon, .menu-icon::before, .menu-icon::after {
    display: block;
    width: 60px;
    height: 6px;
    border-radius: 2.5px;
    left: 0;
    transform-origin: 50% 50%;
    transition: all .5s ease-out;
  }

  .menu-icon {
    position: absolute;
    left: calc(50% - 30px);
  }


  .menu-icon:nth-child(1) {
    top: calc(50% - 21px);
  }

  .menu-icon:nth-child(2) {
    top: calc(50%);
  }

  .menu-icon:nth-child(3) {
    top: calc(50% + 21px);
  }

  ${({ isOpen }) => isOpen && openState}
`

export default function Burger({ onClick, ...props}) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (e) => {
    if (onClick) onClick(e)
    setOpen(!isOpen)
  }

  return (
    <BurgerContainer onClick={handleClick} isOpen={isOpen} {...props}>
      <span className="menu-icon" />
      <span className="menu-icon" />
      <span className="menu-icon" />
    </BurgerContainer>
  )
}
