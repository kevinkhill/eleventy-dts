# eleventy-dts

Types for the default export from `@11ty/eleventy`


## Install
```shell
$ npm install eleventy-dts
```

## Add to `tsconfig.json`
```json
{
	// ...
	"files": [
		"node_modules/eleventy-dts/"
	]
}

```

```js
import Eleventy from "@11ty/eleventy";

try {
	const eleven = new Eleventy("in", "out");

	type A = typeof eleven;
	//   ^?

	eleven.toJSON();
} catch (e) {
	console.error(e);
}

```
