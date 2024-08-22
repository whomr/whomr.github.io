import { defineConfig } from 'vitepress'

export default defineConfig({
    // 编写title与description方便SEO
    title: 'whomr′s blog', // 网站标题
    description: '开发日常使用中所用到的日常提效工具、插件等', //网站描述
    lang: 'zh-CN', //语言类型
    lastUpdated: true, //最近更新时间
    cleanUrls: true, //VitePress 将从 URL 中删除尾随.html

    // 如果要部署到 https://<USERNAME>.github.io/，则可以省略 base，因为它默认为 “/”。
    // 如果您正在部署到 https://<USERNAME>.github.io/<REPO>/， 
    // 例如，您的存储库位于 github.com/<REPO>/，然后将 base 设置为 /<REPO>/
    // base: '/',            // 此处使用 https://<USERNAME>.github.io/ 的方式，所以直接注释掉了

    /* markdown 配置 */
    markdown: {
        // 为每个代码块启用行号
        lineNumbers: true
    },

    // 主题级选项
    themeConfig: {
        // logo: '/logo.png', //显示在导航栏中网站标题之前的徽标文件。接受路径字符串或对象来为亮/暗模式设置不同的徽标。
        // nav: [{ text: 'Home', link: '/' }],
        // sidebar: [],
        // /* 右侧大纲配置 */
        // outline: {
        //     level: 'deep',
        //     label: '本页目录'
        // },
        // docFooter: {
        //     //文档页脚
        //     prev: '上一篇',
        //     next: '下一篇'
        // },
        // socialLinks: [
        //     //显示带有图标的社交帐户链接
        //     { icon: 'github', link: 'https://github.com/lyxdream/tool-kit' }
        // ],
        // darkModeSwitchLabel: '模式', //可用于自定义深色模式开关标签。该标签仅显示在移动视图中。
        // lastUpdatedText: '上次更新' //上次更新文案
        footer: {
            message: 'Released under the <a href="https://github.com/open17/vitepress-theme-open17/blob/template/LICENSE">Apache 2.0 License</a>.',
            copyright: 'Copyright © 2023-present <a href="https://github.com/open17">open17</a>'
        },
        search: {
            provider: 'local'
        },
        blog: {
            title: "My Awesome Blog",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    }
})

/*
文档页脚的值可以设置false，不显示
export interface DocFooter {
  prev?: string | false
  next?: string | false
}
*/
