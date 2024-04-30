export default async function streamToBuffer(
  stream: ReadableStream
): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }
    const buffer = Buffer.concat(chunks);
    return buffer;
  } finally {
    reader.releaseLock();
  }
}
