export default {
	login: {
		url: '/uni_modules/uni-id-pages/pages/login/login-withpwd' // 登录页面路径
	},
	index: {
		url: '/pages/index/index' // 登录后跳转的第一个页面
	},
	error: {
		url: '/pages/error/404' // 404 Not Found 错误页面路径
	},
	navBar: { // 顶部导航
		logo: '/static/logo.png', // 左侧 Logo
		langs: [{
			text: '中文简体',
			lang: 'zh-Hans'
		}, {
			text: '中文繁體',
			lang: 'zh-Hant'
		}, {
			text: 'English',
			lang: 'en'
		}],
		themes: [{
			text: '默认',
			value: 'default'
		}, {
			text: '绿柔',
			value: 'green'
		}],
		debug: {
			enable: process.env.NODE_ENV !== 'production', //是否显示错误信息
			engine: [{ // 搜索引擎配置（每条错误信息后，会自动生成搜索链接，点击后跳转至搜索引擎）
				name: '百度',
				url: 'https://www.baidu.com/baidu?wd=ERR_MSG'
			}, {
				name: '谷歌',
				url: 'https://www.google.com/search?q=ERR_MSG'
			}]
		}
	},
	sideBar: { // 左侧菜单
		// 配置静态菜单列表（放置在用户被授权的菜单列表下边）
		staticMenu: [{
			menu_id: "list",
			text: '数据列表',
			icon: 'admin-icons-kaifashili',
			url: "",
			children: [{
				menu_id: "upload",
				text: '消防产品识别数据库',
				icon: 'admin-icons-icon',
				value: '/pages/demo/table/table',
			}]
		}, {
			menu_id: "system",
			text: '系统管理',
			icon: 'admin-icons-eco',
			url: "",
			children: [{
					menu_id: "user",
					icon: 'admin-icons-manager-user',
					text: '用户管理',
					value: '/pages/system/user/list',
					role: ['admin']
				},
				{
					menu_id: "log",
					icon: 'admin-icons-doc',
					text: '日志管理',
					value: '/pages/system/safety/list'
				}
			]
		}]
	},
	uniStat: {
		// 上传 sourceMap 文件至腾讯云服务空间 ID。空值代表不启用 sourceMap 上报错误回溯源码功能
		uploadSourceMapCloudSpaceId: '',
		// 要上传到的腾讯云云存储访问地址
		cloudSourceMapUrl: ''
	}
}
