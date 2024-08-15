import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "主页",
	},
	blog: {
		path: "/blog",
		title: "博客",
	},
	// share: {
	// 	path: "/share",
	// 	title: "说说",
	// },
	tags: {
		path: "/tags",
		title: "标签",
	},
	// media: {
	// 	path: "/media",
	// 	title: "媒体",
	// },
	phtots: {
		path: "/gallery",
		title: "图册",
	},
	about: {
		path: "/about",
		title: "关于",
	},
};

export const SITE = {
	// Your site's detail?
	name: "墨水",
	title: "墨水",
	description: "是否曾经有那么一句话，走进过你的心",
	url: "https://ink-word.vercel.app/",
	githubUrl: "https://github.com/shijianzhong/ink",
	listDrafts: true,
	image:
		"https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
	// YT video channel Id (used in media.astro)
	ytChannelId: "",
	// Optional, user/author settings (example)
	// Author: name
	author: "", // Example: Fred K. Schott
	// Author: Twitter handler
	authorTwitter: "", // Example: FredKSchott
	// Author: Image external source
	authorImage: "", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// Author: Bio
	authorBio:
		"每句话的产生，都是由经验积累起来的，至少是在一个人那里走过心的",
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */

export const USE_VIEW_STATS = true;
