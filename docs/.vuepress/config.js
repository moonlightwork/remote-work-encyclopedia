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
    ]
  ],
  serviceWorker: true,
  themeConfig: {
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Suggest an improvement",
    logo: "/assets/img/rwe-logo.svg",
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
      "every_company_is_remote",
      "startups",
      "managing",
      "hiring",
      "security",
      "work_from",
      "finding_a_job",
      "career_growth",
      "freelancing",
      "digital_nomad",
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
      hostname: "https://www.remoteworkencyclopedia.com"
    }
  }
};
