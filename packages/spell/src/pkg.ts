import { createRequire } from "node:module";

// @ts-ignore
const { name, version } = createRequire(import.meta.url)("../package.json");

export { name, version };