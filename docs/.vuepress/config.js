module.exports = {
  title: "Remote Work Encyclopedia",
  description:
    "Moonlight's tactical guide to working from anywhere! It covers getting things done, hiring great people, and growing quickly - based on proven tactics from the companies and developers in Moonlight's global community.",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:400,500,600|Roboto:400,400i,500,700&display=swap"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/img/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/img/favicon32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/img/favicon16x16.png"
      }
    ],
    ['script', { src: 'https://f.convertkit.com/ckjs/ck.5.js', defer: '' }]
  ],
  serviceWorker: true,
  themeConfig: {
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Suggest an improvement",
    logo: "/assets/img/rwe-logo.svg",
    mobileLogo: "/assets/img/rwe-logo-mobile.svg",
    nav: [
      {
        text: "Moonlight",
        link: "https://www.moonlightwork.com",
        rel: "noopener"
      }
    ],
    repo: "moonlightwork/remote-work-encyclopedia",
    repoLabel: "Contribute",
    smoothScroll: true,
    sidebar: [
      "/",
      "globalization",
      "remote-is-here-to-stay",
      "startups",
      "hiring",
      "managing",
      "security",
      "where-to-work",
      "land-a-job",
      "career-growth",
      "freelancing",
      "digital-nomad",
      "moonlight"
    ]
  },
  plugins: {
    "@vuepress/google-analytics": {
      ga: "UA-89429912-2"
    },
    robots: {
      host: "https://www.remoteworkencyclopedia.com",
      allowAll: true
    },
    sitemap: {
      hostname: "https://www.remoteworkencyclopedia.com",
      exclude: ["/404.html"]
    }
  }
};
