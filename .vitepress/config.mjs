import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "kroikie-blog",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'My First Post', link: '/first-post' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kroikie-blog' }
    ]
  }
})
