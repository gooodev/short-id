"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  shortId: () => shortId
});
module.exports = __toCommonJS(src_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  shortId
});
//# sourceMappingURL=index.cjs.map