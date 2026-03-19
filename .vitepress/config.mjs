import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "kroikie-blog",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Posts', link: '/posts/first-post' },
      { text: 'Posts', link: '/posts/second-post' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: 'Blog Posts',
          items: [
            { text: 'My First Post', link: '/posts/first-post' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kroikie-blog' }
    ]
  }
})
