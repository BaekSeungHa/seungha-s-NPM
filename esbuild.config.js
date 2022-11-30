const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");
esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    format: "cjs",
    platform: "",
    outdir: "./build",
    external: ["react", "react-dom", "styled-components"],
    bundle: true,
    plugins: [inlineImage()],
  })
  .catch(() => process.exit(1));
