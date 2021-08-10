export class TrackLoader {
  constructor(url) {
    this.url = url;
  }

  loadFullTrackBuffer = async () => {
    const response = await fetch(this.url);

    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    }

    if (!response.body) {
      throw Error("ReadableStream not yet supported in this browser.");
    }

    const contentLength = response.headers.get("content-length");
    if (!contentLength) {
      throw Error("Content-Length response header unavailable");
    }

    this.buffer = response.arrayBuffer();

    return this.buffer;
  };
}
