import Eleventy from "@11ty/eleventy";

try {
	const eleventy = new Eleventy("_11ty/input", "_11ty/output");

	eleventy.toJSON();
} catch (e) {
	console.error(e);
}
