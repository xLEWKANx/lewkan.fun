import butterchurnPresets from "butterchurn-presets/lib/butterchurnPresetsMD1.min.js";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import track from "../music/home-track.mp3";
import AudioContext from "../features/audio-processing/AudioContext";
import { TrackLoader } from "../features/audio-processing/TrackLoader";
import { TrackDecoder } from "../features/audio-processing/TrackDecoder";
import { Normalize } from "styled-normalize";
import heroImg from "../images/hero-image-3.png"
import { ReactComponent as Logo } from "../images/lewkan-logo-white.svg";
import { mediaQueries } from "../screenSizes" 

class VisualController {
  constructor(canvas, butterchurn) {
    this.audioCtx = new AudioContext();;
    this.source = this.audioCtx.createBufferSource();
    this.visualizer = butterchurn.createVisualizer(
      this.audioCtx,
      canvas,
      {
        width: 800,
        height: 600,
      }
    );
  }

  addBuffer = (buffer) => {
    this.source.buffer = buffer;
    return this;
  }

  setSourceOptions = (options) => {
    Object.assign(this.source, options) 
    return this;
  }

  setSize = (width, height) => {
    this.visualizer.setRendererSize(width, height)
  }

  refreshDelayNode() {
    if(this.delayedAudio) {
      delayedAudible.disconnect();
    }

    this.delayedAudio = this.audioCtx.createDelay();
    this.delayedAudio.delayTime.value = 0.26;
  }

  connectToAudioAnalyzer() {
    this.refreshDelayNode()
    this.source.connect(this.delayedAudio)
    this.delayedAudio.connect(this.audioCtx.destination);
    this.visualizer.connectAudio(this.delayedAudio);
  }

  startRenderer = () => {
    requestAnimationFrame(() => this.startRenderer());
    this.visualizer.render();
  }

  startPlay = () => {
    this.source.start(0);
  }

  start = () => {
    this.startRenderer()
    this.startPlay()
  }

  configurePresets = (presetName) => {
    const presets = butterchurnPresets.getPresets();
    console.log('presets', presets)
    const preset =
      presets[presetName];
    this.visualizer.loadPreset(preset, 0.0);
  }

  loadTrack = () => {
    const loadingTrack = new TrackLoader(track);
    const decoder = new TrackDecoder(this.audioCtx)

    this.connectToAudioAnalyzer()

    this.loadingPromise = loadingTrack.loadFullTrackBuffer()
      .then(decoder.decode)
      .then(this.addBuffer)
  }

}

const HeroContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 100vh;
  overflow: hidden;
`

const StyledLogo = styled(Logo)`
  padding: 25px 30px;
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
  z-index: -1;
`

const IndexPage = ({}) => {
  const canvasRef = useRef();
  const [visualCtrlState, setVisualCtrl] = useState();

  useEffect(() => {
    import("butterchurn").then(({ default: butterchurn }) => {
      console.log('module', module)
      const visualCtrl = new VisualController(canvasRef.current, butterchurn);
      setVisualCtrl(visualCtrl)
      // visualCtrl.configurePresets("Rozzor & Shreyas - Deeper Aesthetics");
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
  }

  return (
    <HeroContainer onClick={play}>
      <Normalize />
        <header>
          <StyledLogo width={150} />
        </header>
        <Canvas  ref={canvasRef} />
        <HeroImage src={heroImg} />
    </HeroContainer>
  );
};

export default IndexPage;
