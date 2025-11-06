import { defineConfig } from "tsdown";

export default defineConfig({
	noExternal: ["11ty.ts"],
	entry: ["./src/index.d.ts"],
	format: "esm",
	platform: "node",
	dts: true,
});
