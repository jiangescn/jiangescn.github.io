// 友链检测 CLI 需要使用显式导入和相对路径
import type { FeedGroup } from '../app/types/feed'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
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
	// #region WUSTers
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
				icon: '/images/localized/4a2919572c1a2e708f14.png',
				avatar: '/images/localized/4a2919572c1a2e708f14.png',
				archs: ['Hexo', '服务器'],
				date: '2024-02-02',
				comment: '矮个子篮球爱好者,瘦小足球爱好者,羸弱羽毛球爱好者,短腿跑步爱好者,不会<成都>的吉他爱好者',
			},
			{
				author: 'WUST-ACM',
				sitenick: 'WUST-ACM',
				title: 'WUST-ACM',
				desc: '武汉科技大学ACM俱乐部',
				link: 'https://blog.wustacm.org/',
				icon: '/images/localized/47854a9eaa3e2ecfdd54.jpg',
				avatar: '/images/localized/47854a9eaa3e2ecfdd54.jpg',
				date: '2026-06-18',
				comment: '武汉科技大学 ACM 俱乐部。',
			},
			{
				author: 'aMore',
				sitenick: 'everlasting',
				title: 'everlasting',
				desc: 'aMore的个人博客',
				link: 'https://everlastingblog.top/',
				icon: '/images/localized/3ce5f215940125ddd883.jpg',
				avatar: '/images/localized/3ce5f215940125ddd883.jpg',
				date: '2026-06-18',
			},
			{
				author: 'Icho',
				sitenick: 'Icho',
				title: 'Icho',
				desc: 'Icho的个人博客',
				link: 'https://ichooooooo.github.io/',
				icon: '/images/localized/3dc6eda79bbba3106d3d.jpg',
				avatar: '/images/localized/3dc6eda79bbba3106d3d.jpg',
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
			{
				author: 'FengXi',
				title: 'ListFX的Blog',
				desc: '这里是FengXi的博客鸭～',
				link: 'https://listfx.top/',
				icon: '/images/localized/2a4ddde54093a0b42d87.jpg',
				avatar: '/images/localized/2a4ddde54093a0b42d87.jpg',
				date: '2026-09-26',
			},
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
			{
				author: '記緒漂流',
				title: '記緒漂流',
				desc: '于记忆之川，泛思绪之舟。',
				link: 'https://ttio.cc/',
				feed: 'https://ttio.cc/feed.xml',
				icon: '/images/localized/8d3dae8efc544c075f1a.svg',
				avatar: '/images/localized/8d3dae8efc544c075f1a.svg',
				date: '2026-09-26',
			},
			{
				author: 'Eltrac',
				sitenick: '極客死亡計劃',
				title: '極客死亡計劃',
				desc: '这里只有真情流露和赤裸的思考。',
				link: 'https://www.geedea.pro/',
				icon: getFavicon('www.geedea.pro'),
				avatar: getFavicon('www.geedea.pro', { size: 128 }),
				date: '2026-09-26',
			},
			{
				author: '纸鹿本鹿',
				title: '纸鹿摸鱼处',
				desc: '纸鹿至麓不知路，支炉制露不止漉',
				link: 'https://blog.zhilu.site/',
				icon: '/images/localized/38d8d3df373a812eec47.png',
				avatar: '/images/localized/38d8d3df373a812eec47.png',
				date: '2026-09-26',
			},
			{
				author: '伏枥之间',
				title: '伏枥之间',
				desc: '何妨吟啸且徐行',
				link: 'https://www.leehenry.top/',
				icon: '/images/localized/b221d8ff1764d2cad859.jpg',
				avatar: '/images/localized/b221d8ff1764d2cad859.jpg',
				date: '2026-09-26',
			},
		],
	},
	// #endregion
] satisfies FeedGroup[]
