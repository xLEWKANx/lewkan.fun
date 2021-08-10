export class TrackDecoder {
  constructor(audioCtx) {
    this.audioCtx = audioCtx;
  }

  decode = (arrayBuffer) =>
    new Promise((resolve) =>
      this.audioCtx.decodeAudioData(arrayBuffer, (buffer) => resolve(buffer))
    );
}
