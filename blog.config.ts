import type { FeedEntry } from './app/types/feed'

const basicConfig = {
	title: 'Jiangse',
	subtitle: '留此一方素纸，待岁生苔|',
	// 长 description 利好于 SEO
	description: '兹将心事，化入岁暮之砚。不求标榜于竹帛，惟愿苔痕过雪，鸿影印沙，为逝川留一二实证。倘他年风翻此页，便算在人间，多活了一遭。',
	author: {
		name: 'Jiangse',
		avatar: 'https://jianges.com/wp-content/uploads/2025/12/1765434218-jianges.jpg',
		email: '2660998832@qq.com',
		homepage: 'https://jianges.com/',
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名-非商业性使用-相同方式共享 4.0 国际',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	favicon: '/favicon.png',
	language: 'zh-CN',
	timeEstablished: '2025-12-30',
	timeZone: 'Asia/Shanghai',
	url: 'https://jiangescn.github.io/',
	defaultCategory: '未分类',
}

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
// @keep-sorted
const blogConfig = {
	...basicConfig,

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: 'tabler:circle-dashed' },
			'WUST-OJ': { icon: 'tabler:terminal-2', color: '#77f' },
			技术: { icon: 'tabler:tool', color: '#3af' },
			经验分享: { icon: 'tabler:mouse', color: '#3af' },
			杂谈: { icon: 'tabler:message', color: '#3ba' },
			生活: { icon: 'tabler:sparkles', color: '#f77' },
			代码: { icon: 'tabler:code', color: '#77f' },
			期末复习: { icon: 'tabler:school', color: '#fa3' },
		},
		/** 文章版式，首个为默认版式 */
		types: {
			tech: {},
			story: {},
		},
		/** 分类排序方式，键为排序字段，值为显示名称 */
		order: {
			date: '创建日期',
			updated: '更新日期',
			// title: '标题',
		},
		/** 使用 pnpm new 新建文章时自动生成自定义链接（permalink/abbrlink） */
		useRandomPremalink: false,
		/** 隐藏基于文件路由（不是自定义链接）的 URL /post 路径前缀 */
		hidePostPrefix: true,
		/** 禁止搜索引擎收录的路径 */
		robotsNotIndex: ['/preview', '/previews/*'],
	},

	/** 博客 Atom 订阅源 */
	feed: {
		/** 订阅源最大文章数量 */
		limit: 50,
		/** 订阅源是否启用XSLT样式 */
		enableStyle: true,
	},

	/** 向 <head> 中添加脚本 */
	scripts: [],

	/** 自己部署的 Twikoo 服务；留空时不显示评论区 */
	twikoo: {
		envId: '',
		preload: '',
	},
}

/** 用于生成 OPML 和友链页面配置 */
export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	sitenick: blogConfig.title,
	title: blogConfig.title,
	desc: blogConfig.subtitle || blogConfig.description,
	link: blogConfig.url,
	feed: new URL('/atom.xml', blogConfig.url).toString(),
	icon: new URL(blogConfig.favicon, blogConfig.url).toString(),
	avatar: blogConfig.author.avatar,
	archs: ['Nuxt', 'GitHub Pages'],
	date: blogConfig.timeEstablished,
	comment: '这是我自己',
}

export default blogConfig
