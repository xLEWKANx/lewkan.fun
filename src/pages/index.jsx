import butterchurnPresets from "butterchurn-presets";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import track from "../music/home-track.mp3";
import AudioContext from "../features/audio-processing/AudioContext";
import { TrackLoader } from "../features/audio-processing/TrackLoader";
import { TrackDecoder } from "../features/audio-processing/TrackDecoder";
import { Normalize } from "styled-normalize";

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

  configurePresets = () => {
    const presets = butterchurnPresets.getPresets();
    const preset =
      presets["Flexi, martin + geiss - dedicated to the sherwin maxawow"];
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

const IndexPage = ({}) => {
  const canvasRef = useRef();
  const [visualCtrlState, setVisualCtrl] = useState();

  useEffect(() => {
    import("butterchurn").then(({ default: butterchurn }) => {
      console.log('module', module)
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
  }

  return (
    <div>
      <Normalize />


        <canvas  onClick={play}ref={canvasRef}></canvas>
    </div>
  );
};

export default IndexPage;
