export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","styles.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-9b39d526.js","imports":["_app/immutable/start-9b39d526.js","_app/immutable/chunks/index-521e50df.js","_app/immutable/chunks/singletons-7d617ba9.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
