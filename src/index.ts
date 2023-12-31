import { v4 as uuidv4 } from 'uuid';

const uuidToUint8Array = (target: string) => {
  const uuid = target.replace(/-/g, '');
  const bytes = new Uint8Array(16);
  for (let i = 0, j = 0; i < 16; i++, j += 2) {
    bytes[i] = parseInt(uuid.slice(j, j + 2), 16);
  }
  return bytes.buffer;
}

const arrayBufferToBase64Url = (arrayBuffer: ArrayBuffer) => {
  const bytes = new Uint8Array(arrayBuffer);
  const binary = Array.from(bytes).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
  const base64 = btoa(binary);
  return base64.replace('+', '-').replace('/', '_').replace(/=+$/, '');
}

export const shortId = () => {
  const uuid = uuidv4();
  const buffer = uuidToUint8Array(uuid);
  const base64url = arrayBufferToBase64Url(buffer);

  return base64url;
};
