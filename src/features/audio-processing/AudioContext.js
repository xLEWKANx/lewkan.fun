export default class DecoratedAudioContext {
  constructor() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    return this.audioCtx;
  }
}
