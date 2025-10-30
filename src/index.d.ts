declare module "@11ty/eleventy" {
	import type { EleventyConfig } from "11ty.ts";

	interface EleventyOptions {
		source?: "cli" | "script";
		runMode?: "build" | "serve" | "watch";
		dryRun?: boolean;
		configPath?: string;
		pathPrefix?: string;
		quietMode?: boolean;
		config?: (cfg: EleventyConfig) => void | Promise<void>;
		inputDir?: string;
		loader?: "auto" | "esm" | "cjs";
	}

	class Eleventy {
		constructor();
		constructor(
			input?: string,
			output?: string,
			options?: EleventyOptions,
			eleventyConfig?: TemplateConfig,
		);
		constructor(options?: EleventyOptions, eleventyConfig?: TemplateConfig);

		// Public properties
		rawInput?: string;
		rawOutput?: string;
		options: EleventyOptions;
		source: "cli" | "script";
		runMode: "build" | "serve" | "watch";
		isDryRun: boolean;
		isIncremental: boolean;
		isRunInitialBuild: boolean;
		buildCount: number;
		loader: "auto" | "esm" | "cjs";
		start: number;

		// Computed properties
		get configPath(): string | undefined;
		get pathPrefix(): string;
		get directories(): ProjectDirectories;
		get input(): string;
		get inputFile(): string;
		get inputDir(): string;
		get outputDir(): string;
		get verboseMode(): boolean;
		set verboseMode(value: boolean);
		get logger(): ConsoleLogger;
		set logger(value: ConsoleLogger);
		get errorHandler(): EleventyErrorHandler;
		get templateFormats(): ProjectTemplateFormats;
		get projectPackageJsonPath(): string | false;
		get projectPackageJson(): Record<string, any>;
		get isEsm(): boolean;

		// Static
		static getVersion(): string;
		getVersion(): string;

		// Core lifecycle
		initializeConfig(initOverrides?: Record<string, unknown>): Promise<void>;
		init(options?: { viaConfigReset?: boolean }): Promise<void>;
		restart(): Promise<void>;
		resetConfig(): Promise<void>;

		// Build
		write(subtype?: string): Promise<any[]>;
		/**
		 * Output the JSON info about the collected templates
		 */
		toJSON(): Promise<any[]>;
		executeBuild(to?: "fs" | "fs:templates" | "json"): Promise<any[]>;

		// State modifiers
		setDryRun(isDryRun: boolean): void;
		setIncrementalBuild(isIncremental: boolean): void;
		setIgnoreInitial(ignoreInitialBuild: boolean): void;
		setPathPrefix(pathPrefix: string): void;
		setIsVerbose(isVerbose: boolean): void;
		setFormats(formats: string): void;
		setRunMode(runMode: "build" | "watch" | "serve"): void;
		setIncrementalFile(incrementalFile: string): void;
		unsetIncrementalFile(): void;

		// Environment
		getEnvironmentVariableValues(): Record<string, any>;
		initializeEnvironmentVariables(env: Record<string, any>): void;

		// Logging
		disableLogger(): void;
		logFinished(): string;
	}
	export default Eleventy;
}
