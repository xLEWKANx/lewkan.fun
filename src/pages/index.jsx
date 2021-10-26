/* eslint-disable prettier/prettier */

// import styled from "styled-components";
// import { useEffect, useRef, useState } from "react";
// import { Normalize } from "styled-normalize";
// import heroImg from "../images/hero-image-3.png";
// import { ReactComponent as Logo } from "../images/lewkan-logo-white.svg";
// import { mediaQueries } from "../screenSizes";
// import Burger from "../components/header/Burger";
// import VisualController from "../features/audio-visual-processing/VisualController";
// import Layout from "../components/indexPage/Layout";

// const HeroContainer = styled.div`
//   position: relative;
//   cursor: pointer;
//   height: 100vh;
//   overflow: hidden;
// `;

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 1;

//   font-family: "Fredoka One", cursive;
//   font-size: 3rem;

//   transition: all 0.3s;
// `;

// const StyledLogo = styled(Logo)`
//   padding: 25px 30px;
//   transition: all 0.3s;
// `;

// const StyledBurger = styled(Burger)`
//   .menu-icon {
//     background-color: white;
//   }

//   @media ${mediaQueries.md} {
//     display: none;
//   }
// `;

// const HeroImage = styled.img`
//   position: absolute;
//   bottom: 0;
//   pointer-events: none;
//   height: 70vh;
//   right: -30%;

//   @media ${mediaQueries.sm} {
//     height: 70vh;
//     right: -100px;
//   }

//   @media ${mediaQueries.md} {
//     height: 100vh;
//     right: 20px;
//   }
// `;

// const Canvas = styled.canvas`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   filter: saturate(30%) opacity(70%);
// `;

// const CanvasOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #feefef;
//   opacity: 0.3;
//   mix-blend-mode: color;
// `;

// const StyledNav = styled.nav`
//   display: flex;

//   a {
//     color: white;
//     text-decoration: none;
//     padding: 20px 25px;
//   }
// `;

// const IndexPage = () => {
//   const canvasRef = useRef();
//   const [visualCtrlState, setVisualCtrl] = useState();

//   useEffect(() => {
//     import("butterchurn").then(({ default: butterchurn }) => {
//       const visualCtrl = new VisualController(canvasRef.current, butterchurn);
//       setVisualCtrl(visualCtrl);
//       const setSize = () => {
//         const w = document.documentElement.clientWidth;
//         const h = document.documentElement.clientHeight;
//         canvasRef.current.width = w;
//         canvasRef.current.height = h;
//         visualCtrl.setSize(w, h);
//       };

//       visualCtrl.loadTrack();
//       visualCtrl.startRenderer();
//       setSize();
//       window.addEventListener("resize", setSize, true);
//     });
//   }, []);

//   const play = () => {
//     if (visualCtrlState) visualCtrlState.startPlay();
//     visualCtrlState.configurePresets("Rozzor & Shreyas - Deeper Aesthetics");
//   };

//   return (
//     <Layout>
//       <div style={{ height: 5000, backgroundColor: "black" }}>
//         <Header>
//           <StyledLogo width={150} />
//           <StyledNav>
//             <a href="#projects">My Experience</a>
//             <a href="#skills">My Skills</a>
//             <a href="blog">My Blog</a>
//             <a href="#contacts">My Contacts</a>
//           </StyledNav>
//           <StyledBurger />
//         </Header>
//         <HeroContainer>
//           <Normalize />
//           <Canvas onClick={play} ref={canvasRef} />
//           <CanvasOverlay onClick={play} />
//           <HeroImage src={heroImg} />
//         </HeroContainer>
//         <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//       </div>
//     </Layout>
//   );
// };

const IndexPage = () => {
return <pre style={{ whiteSpace: "pre-wrap"}}> sexsexsexsexsexse
<br /> sexsesexsexsexsexsexs
<br /> sexsexsexsexsexsexsexse
<br /> sexsexsexsexsexsexsexsexsex
<br /> sexsexsexsexsexsexsexsexsexsex
<br /> sexsexsexsexsexsexsexsexsexsexs
<br /> sexsexsexsexsexsexsexsexsexsexsex
<br /> sexsexsexsexsexsexsexsexsexsexsexse
<br /> sexsexsexsexsexsexsexsexsexsexsexsex
<br /> exsexsexsexsexsexsexsex  sexsexsexsex
<br /> sexsexsexsexsexsexsexs     sexsexsexse
<br /> sexsexsexsexsexsexsex        sexsexsex
<br /> sexsexsexsexsexsex            sexsexsx
<br /> sexsexsexsexsexx              sexsexs x
<br /> sexsexsexsexsex-****.    .***-sexsexs sexs
<br /> sexsexsexsexsex               sexsex sexsexs
<br /> sexsexsexsexsex              sexsex sexsexsexs
<br /> sexsexsexsexsex              sexse sexsexsexse
<br /> sesexsexsexsexs   --sexsex- sexse sexsexsexse
<br /> xsexsexsexsexse      sexs  sexse sexsexsexs
<br /> sexsexsexsexsexse         sexse sexsexsexse
<br /> sexsexsexsexsexsexs       sexse    sexsexse
<br /> sexsexse      sexsexs      ixx       sexse
<br /> sexsex         sexsexs     i         sex
<br /> sexs            sexsexs    i         x
<br /> sex              sexsex        x   x
<br /> x               sexsex        x  x
<br /> x                sexse          xx
<br /> sex                sex                x
<br /> sexsexs             xx                     x
<br /> sexsexsex    x x                  x           x
<br /> sexsexsexsexse                       x          (o
<br /> sexsexsexsexse       x                            x
<br /> sexsexsexsexse   x     x         (o)      x        x
<br /> sexsexsexsexse     x      x                 x       x
<br /> sexsexsexsex        x       x               x      x
<br /> sexsexsexsex          x        x             x    xx
<br /> sexsexsexse           x         x          x      x
<br /> sexsexsexse           x           x x  x         x
<br /> sexsexsexs          x                          x
<br /> sexsexsexs          x                        x
<br /> sexsexsex           x                       x
<br /> sexsexsex           x                     x
<br /> sexsexsex           x                    x
<br /> sexsexse            x                 x
<br /> sexsexse            x                x
<br /> sexsexs           x                 x
<br /> sexsex sexsexse x                  x
<br /> sexsexsexsexsexs                   x
<br /> sexsexsexsexse                     x
<br /> sexsexsexsex               o       x
<br /> sexsex                        x
<br /> x                             x
<br /> x                              x
<br /> x                               x
<br /> x                      Y        x
<br /> x                      x        x
<br /> x                       x       x
<br /> x                        x      x
<br /> x                 sexsexsex     x
<br /> x            sexsexsexsexsx exsex
<br /> x          sexsexsexsexsexs sexx
<br /> x       sexsexsexsexsexsexs xx
<br /> x     sexsexsexsexsexsexse x
<br /> x   sexsexsexsexsexsexsexs
<br /> x sexsexsexsexsexsexsexse
<br /> sexsexsexsexsexsexsexsex
<br /> sexsexsexsexsexsexsexse
<br /> x sexsexsexsexsexsexsexs
<br /> xx sexsexsexsexsexsexsexs
<br /> sex sexsexsexsexsexsexsex
<br /> sex sexsexsexsexsexsexse
<br /> sexs sexsexsexsexsexsexs
<br /> sexse sexsexsexsexsexse
<br /> sexsex sexsexsexsexsexse
<br />  sexsex sexsexsexsexsexs
<br />  sexsexs sexsexsexsexsex
<br />   sexsexs sexsexsexsexse
<br />   sexsexse sexsexsexsexs
<br />   sexsexsex sexsexsexsex
<br />   sexsexsexs  sexsexsexse
<br />   sexsexsexs  sexsexsexse
<br />  sexsexsexse   sexsexsexs
<br />  sexsexsexs    sexsexsexse
<br /> sexsexsexse    sexsexsexse
<br /> sexsexsexse     sexsexsexse
<br /> sexsexsexse      sexsexsexs
<br /> sexsexsexse     sexsexsexse
<br /> sexsexsexsex     sexsexsexse
<br /> sexsexsexsex     sexsexsexse
<br /> sexsexsexsex     sexsexsexsex
<br /> sexsexsexse      sexsexsexsex
<br /> sexsexsexse      sexsexsexsex
<br /> sexsexsexs      sexsexsexsex
<br /> sexsexsexs       sexsexsexse
<br /> sexsexsex        sexsexsexse
<br /> sexsexse         sexsexsexs
<br /> sexsexse          sexsexsex
<br /> sexsexs           sexsexse
<br /> sexsex             sexsexs
<br /> sexsex              sexsexs
<br /> sexsex               sexsex
<br />  exsex                sexse
<br /> sexsex                sexsex
<br /> sexsex                sexsex
<br /> sexsexs               sexsexx
<br /> sexsexsex             sexsexse
<br /> sexsexsexse          sexsexsexse
<br /> sexsexsexsexs        sexsexsexsex
<br /> sexsexsexsexse       sexsexsexsex
<br /> sex    sexsexsex    sexsexsexsex
<br />  x        sexsexse   xx sexsexse
<br />                      x    sexsex
<br />                            sexse
<br />                            sexse
<br />                            sexse
<br />                              sex
<br />                               xx
<br />                               xx
<br /></pre> 
}

export default IndexPage;

