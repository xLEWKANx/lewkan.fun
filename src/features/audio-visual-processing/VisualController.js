import butterchurnPresets from "butterchurn-presets/lib/butterchurnPresetsMD1.min.js";
import track from "../../music/home-track.mp3";
import AudioContext from "../audio-processing/AudioContext";
import { TrackLoader } from "../audio-processing/TrackLoader";
import { TrackDecoder } from "../audio-processing/TrackDecoder";

export default class VisualController {
  constructor(canvas, butterchurn) {
    this.audioCtx = new AudioContext();
    this.source = this.audioCtx.createBufferSource();
    this.visualizer = butterchurn.createVisualizer(this.audioCtx, canvas, {
      width: 800,
      height: 600,
    });
  }

  addBuffer = (buffer) => {
    this.source.buffer = buffer;
    return this;
  };

  setSourceOptions = (options) => {
    Object.assign(this.source, options);
    return this;
  };

  setSize = (width, height) => {
    this.visualizer.setRendererSize(width, height);
  };

  refreshDelayNode() {
    if (this.delayedAudio) {
      delayedAudible.disconnect();
    }

    this.delayedAudio = this.audioCtx.createDelay();
    this.delayedAudio.delayTime.value = 0.26;
  }

  connectToAudioAnalyzer() {
    this.refreshDelayNode();
    this.source.connect(this.delayedAudio);
    this.delayedAudio.connect(this.audioCtx.destination);
    this.visualizer.connectAudio(this.delayedAudio);
  }

  startRenderer = () => {
    requestAnimationFrame(() => this.startRenderer());
    this.visualizer.render();
  };

  startPlay = () => {
    this.source.start(0);
  };

  start = () => {
    this.startRenderer();
    this.startPlay();
  };

  configurePresets = (presetName) => {
    const presets = butterchurnPresets.getPresets();
    const preset = presets[presetName];
    this.visualizer.loadPreset(preset, 0.0);
  };

  loadTrack = () => {
    const loadingTrack = new TrackLoader(track);
    const decoder = new TrackDecoder(this.audioCtx);

    this.connectToAudioAnalyzer();

    this.loadingPromise = loadingTrack
      .loadFullTrackBuffer()
      .then(decoder.decode)
      .then(this.addBuffer);
  };
}
