// 友链检测 CLI 需要使用显式导入和相对路径
import type { FeedGroup } from '../app/types/feed'
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region Clarity
	{
		name: '清晰体验',
		desc: '使用 Clarity 博客主题构建的网站。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			myFeed,
			// {
			// 	author: 'Xlenco',
			// 	sitenick: '希乐博客',
			// 	desc: '互联网中的静谧之地',
			// 	link: 'https://blog.xlenco.top/',
			// 	feed: 'https://blog.xlenco.top/atom.xml',
			// 	icon: 'https://weavatar.com/avatar/67254b346498965226e5c91ebff66a69570b97f224d2d061e504b4eade1f00fa',
			// 	avatar: getOicqAvatar('1043865083'),
			// 	archs: ['Nuxt', 'EdgeOne'],
			// 	date: '2024-07-28',
			// 	comment: '学生，经验分享。',
			// }
		],
	},
	// #endregion
	// #region 网上邻居
	{
		name: '网上邻居',
		desc: '哔——啵——电波通讯中，欢迎常来串门。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			// {
			// 	author: 'GuuGuai',
			// 	sitenick: '杂记本',
			// 	title: '古怪杂记本',
			// 	desc: '一个什么都可能会写的博客',
			// 	link: 'https://gug.thisis.host/',
			// 	feed: 'https://gug.thisis.host/atom.xml',
			// 	icon: getFavicon('gug.thisis.host'),
			// 	avatar: 'https://cdn.libravatar.org/avatar/646331bff8f19a0e05679c3cc0fc54d6?s=160',
			// 	archs: ['Hexo', 'Netlify'],
			// 	date: '2024-01-29',
			// 	comment: '高中同学，技术好友，爱好番剧/折腾。',
			// }
		],
	},
	/* ========从此处新增友链======== */
	// #region 云驿
	{
		name: '云驿',
		desc: '从 jianges.com 主站同步的友链。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: 'WUST-ACM',
				sitenick: 'WUST-ACM',
				title: 'WUST-ACM',
				desc: '武汉科技大学ACM俱乐部',
				link: 'https://blog.wustacm.org/',
				icon: 'https://jianges.com/wp-content/uploads/2025/12/1765433981-微信图片_20251209220921_240_30.jpg',
				avatar: 'https://jianges.com/wp-content/uploads/2025/12/1765433981-微信图片_20251209220921_240_30.jpg',
				date: '2026-06-18',
				comment: '武汉科技大学 ACM 俱乐部。',
			},
			{
				author: 'aMore',
				sitenick: 'everlasting',
				title: 'everlasting',
				desc: 'aMore的个人博客',
				link: 'https://everlastingblog.top/',
				icon: 'https://jianges.com/wp-content/uploads/2026/01/1767861756-avatar.jpg',
				avatar: 'https://jianges.com/wp-content/uploads/2026/01/1767861756-avatar.jpg',
				date: '2026-06-18',
			},
			{
				author: 'Icho',
				sitenick: 'Icho',
				title: 'Icho',
				desc: 'Icho的个人博客',
				link: 'https://ichooooooo.github.io/',
				icon: 'https://jianges.com/wp-content/uploads/2026/01/1768288592-avatar.jpg',
				avatar: 'https://jianges.com/wp-content/uploads/2026/01/1768288592-avatar.jpg',
				date: '2026-06-18',
				error: '主站检测为访问异常',
			},
			{
				author: 'shoper',
				sitenick: 'shoper',
				title: 'shoper',
				desc: 'shoper\'s docs',
				link: 'https://docs.scandidreams.top/',
				icon: 'https://image.wustacm.org/i/2026/02/17/si2wc7.png',
				avatar: 'https://image.wustacm.org/i/2026/02/17/si2wc7.png',
				date: '2026-06-18',
			},
		],
	},
	// #endregion
	// #endregion
	// #region XUPTers
	{
		name: 'WUSTers',
		desc: '武汉科技大学的校友们。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: 'scandi',
				sitenick: 'scandi',
				title: 'scandi的小屋',
				desc: '心怀暖阳，步履生风',
				link: 'http://blog.scandidreams.top/',
				feed: 'https://www.bandao.ltd/atom.xml',
				icon: 'https://jianges.com/wp-content/uploads/2026/01/1767865673-头像.png',
				avatar: 'https://jianges.com/wp-content/uploads/2026/01/1767865673-头像.png',
				archs: ['Hexo', '服务器'],
				date: '2024-02-02',
				comment: '矮个子篮球爱好者,瘦小足球爱好者,羸弱羽毛球爱好者,短腿跑步爱好者,不会<成都>的吉他爱好者',
			}
		],
	},
	// #endregion
	// #region 现实之域
	{
		name: '现实之域',
		desc: '博主们或许正忙着追随生活的烟火气。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			// {
			// 	author: '小李同学',
			// 	sitenick: 'Coding',
			// 	title: '小李同学 Coding',
			// 	desc: '一支努力变强的小彩笔',
			// 	link: 'https://blog.xxfer.cn/',
			// 	feed: 'https://blog.xxfer.cn/rss.xml',
			// 	icon: getFavicon('blog.xxfer.cn'),
			// 	avatar: getGithubAvatar('JJLibra'),
			// 	archs: ['Hexo', '国内 CDN'],
			// 	date: '2024-02-01',
			// 	comment: '瓜大网安学长。',
			// 	error: '域名2025-10-28过期',
			// },
		],
	},
	// #endregion
	// #region 漫游
	{
		name: '漫游',
		desc: '网上冲浪时发现的精彩内容与常读订阅，与君共享。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			// {
			// 	author: 'PlatyHsu',
			// 	sitenick: 'neverland',
			// 	desc: 'Editor. Currently at SSPAI.',
			// 	link: 'https://hsu.cy/',
			// 	feed: 'https://hsu.cy/feed.xml',
			// 	icon: getFavicon('hsu.cy'),
			// 	avatar: 'https://cdnfile.sspai.com/2024/01/19/2e1141e8de2022c94ea9dd8b805f877c.png?imageMogr2/auto-orient/thumbnail/!200x200r/gravity/center/crop/200x200/format/webp/ignore-error/1',
			// 	archs: ['Hugo', 'Cloudflare'],
			// 	date: '2025-09-03',
			// 	comment: '长期记录多领域内容，涵盖数码产品软件配置、文艺作品品论等，兼具技术实践与观点分享。',
			// },
		],
	},
	// #endregion
] satisfies FeedGroup[]
