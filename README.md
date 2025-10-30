# eleventy-dts

Types for the default export from `@11ty/eleventy`


## Install
```shell
$ npm install eleventy-dts
```

## Add to `tsconfig.json`
```json
{
	"compilerOptions":{
		// ...
	},
	"files": [
		// ...
		"node_modules/eleventy-dts/src/index.d.ts"
	]
}

```

```js
import Eleventy from "@11ty/eleventy";

try {
	const eleventy = new Eleventy("in", "out");

	eleventy.toJSON(); // Typed!
} catch (e) {
	console.error(e);
}

```
