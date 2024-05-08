export interface INarrator {
  name: string;
  imageUrl: string;
  audioUrl: string;
}

export interface IFile {
  name: string;
  size: number;
  type: string;
  arrayBuffer(): Promise<ArrayBuffer>;
  slice(start?: number, end?: number, contentType?: string): Blob;
  stream(): ReadableStream;
}

export interface IAudioState {
  isPlaying: boolean;
}
