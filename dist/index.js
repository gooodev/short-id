// src/index.ts
var uuidToUint8Array = (target) => {
  const uuid = target.replace(/-/g, "");
  const bytes = new Uint8Array(16);
  for (let i = 0, j = 0; i < 16; i++, j += 2) {
    bytes[i] = parseInt(uuid.slice(j, j + 2), 16);
  }
  return bytes.buffer;
};
var arrayBufferToBase64Url = (arrayBuffer) => {
  const bytes = new Uint8Array(arrayBuffer);
  const binary = Array.from(bytes).reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = btoa(binary);
  return base64.replace("+", "-").replace("/", "_").replace(/=+$/, "");
};
var shortId = () => {
  const uuid = crypto.randomUUID();
  const buffer = uuidToUint8Array(uuid);
  const base64url = arrayBufferToBase64Url(buffer);
  return base64url;
};
export {
  shortId
};
//# sourceMappingURL=index.js.map