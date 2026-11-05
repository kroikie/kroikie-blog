import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "kroikie.dev",
  description: "Thoughts and field notes on building apps in the Agentic era.",
  cleanUrls: true,
  appearance: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/first-post' },
      { text: 'About', link: '/about' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: 'Blog Posts',
          items: [
            { text: 'Building Apps in the Agentic Era', link: '/posts/first-post' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kroikie' }
    ]
  }
})
