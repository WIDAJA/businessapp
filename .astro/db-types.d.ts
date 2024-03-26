// This file is generated by `studio sync`
declare module 'astro:db' {
	export const db: import("@astrojs/db/runtime").SqliteDB;
	export const dbUrl: string;

	export const Prospect: import("@astrojs/db/runtime").Table<
		"Prospect",
		{"email":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"email","collection":"Prospect","primaryKey":false,"optional":false}},"date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"date","collection":"Prospect"}}}
	>;
}
