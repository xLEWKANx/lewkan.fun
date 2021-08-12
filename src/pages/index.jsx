import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Normalize } from "styled-normalize";
import heroImg from "../images/hero-image-3.png"
import { ReactComponent as Logo } from "../images/lewkan-logo-white.svg";
import { mediaQueries } from "../screenSizes" 
import Burger from "../components/header/Burger";
import VisualController from "../features/audio-visual-processing/VisualController";
import { enumDefaultedMember } from "@babel/types";

const HeroContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 100vh;
  overflow: hidden;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  transition: all 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`

const StyledLogo = styled(Logo)`
  padding: 25px 30px;
  transition: all 0.3s;
`

const StyledBurger = styled(Burger)`
  @media ${mediaQueries.md} {
    display: none;
  }
`

const HeroImage = styled.img`
  position: absolute;
  bottom: 0;
  pointer-events: none;
  height: 70vh;
  right: -30%;

  @media ${mediaQueries.sm} {
    height: 100vh;
    right: 20px;
  }
`

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const IndexPage = ({}) => {
  const canvasRef = useRef();
  const [visualCtrlState, setVisualCtrl] = useState();

  useEffect(() => {
    import("butterchurn").then(({ default: butterchurn }) => {
      const visualCtrl = new VisualController(canvasRef.current, butterchurn);
      setVisualCtrl(visualCtrl)
      const setSize = () => {
        const w = document.documentElement.clientWidth;
        const h = document.documentElement.clientHeight;
        canvasRef.current.width = w;
        canvasRef.current.height = h;
        visualCtrl.setSize(w, h);
      }

      visualCtrl.loadTrack();
      visualCtrl.startRenderer();
      setSize();
      window.addEventListener('resize', setSize, true);
    })
    

  }, []);

  const play = () => {
    if (visualCtrlState) visualCtrlState.startPlay()
    visualCtrlState.configurePresets("Rozzor & Shreyas - Deeper Aesthetics");
  }

  return (
    <div style={{ height: 5000, backgroundColor: "black"}}>
    <Header>
      <StyledLogo width={150} />
      <StyledBurger />
    </Header>
    <HeroContainer>
      <Normalize />
        <Canvas onClick={play} ref={canvasRef} />
        <HeroImage src={heroImg} />
    </HeroContainer>
    </div>
  );
};

export default IndexPage;
