import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Normalize } from "styled-normalize";
import heroImg from "../images/hero-image-3.png";
import { ReactComponent as Logo } from "../images/lewkan-logo-white.svg";
import { mediaQueries } from "../screenSizes";
import Burger from "../components/header/Burger";
import VisualController from "../features/audio-visual-processing/VisualController";
import { Helmet } from "react-helmet";
import Layout from "../components/indexPage/Layout";

const HeroContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 100vh;
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  font-family: "Fredoka One", cursive;
  font-size: 3rem;

  transition: all 0.3s;
`;

const StyledLogo = styled(Logo)`
  padding: 25px 30px;
  transition: all 0.3s;
`;

const StyledBurger = styled(Burger)`
  .menu-icon {
    background-color: white;
  }

  @media ${mediaQueries.md} {
    display: none;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  bottom: 0;
  pointer-events: none;
  height: 70vh;
  right: -30%;

  @media ${mediaQueries.sm} {
    height: 70vh;
    right: -100px;
  }

  @media ${mediaQueries.md} {
    height: 100vh;
    right: 20px;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: saturate(30%) opacity(70%);
`;

const CanvasOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #feefef;
  opacity: 0.3;
  mix-blend-mode: color;
`;

const StyledNav = styled.nav`
  display: flex;

  a {
    color: white;
    text-decoration: none;
    padding: 20px 25px;
  }
`;

const IndexPage = ({}) => {
  const canvasRef = useRef();
  const [visualCtrlState, setVisualCtrl] = useState();

  useEffect(() => {
    import("butterchurn").then(({ default: butterchurn }) => {
      const visualCtrl = new VisualController(canvasRef.current, butterchurn);
      setVisualCtrl(visualCtrl);
      const setSize = () => {
        const w = document.documentElement.clientWidth;
        const h = document.documentElement.clientHeight;
        canvasRef.current.width = w;
        canvasRef.current.height = h;
        visualCtrl.setSize(w, h);
      };

      visualCtrl.loadTrack();
      visualCtrl.startRenderer();
      setSize();
      window.addEventListener("resize", setSize, true);
    });
  }, []);

  const play = () => {
    if (visualCtrlState) visualCtrlState.startPlay();
    visualCtrlState.configurePresets("Rozzor & Shreyas - Deeper Aesthetics");
  };

  return (
    <Layout>
      <div style={{ height: 5000, backgroundColor: "black" }}>
        <Header>
          <StyledLogo width={150} />
          <StyledNav>
            <a href="#projects">My Experience</a>
            <a href="#skills">My Skills</a>
            <a href="blog">My Blog</a>
            <a href="#contacts">My Contacts</a>
          </StyledNav>
          <StyledBurger />
        </Header>
        <HeroContainer>
          <Normalize />
          <Canvas onClick={play} ref={canvasRef} />
          <CanvasOverlay onClick={play} />
          <HeroImage src={heroImg} />
        </HeroContainer>
      </div>
    </Layout>
  );
};

export default IndexPage;
