/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly REDIS_URI: string;
	readonly SITE_URL: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// interface Locals {
//     SITE_URL: string,
//   }