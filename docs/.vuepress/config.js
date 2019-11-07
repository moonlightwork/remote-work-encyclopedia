module.exports = {
  title: "Remote Work Encyclopedia",
  description:
    "Moonlight's tactical guide to working from anywhere! It covers getting things done, hiring great people, and growing quickly - based on proven tactics from the companies and developers in Moonlight's global community.",
  serviceWorker: true,
  themeConfig: {
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Suggest an improvement",
    logo: '/assets/img/logo-full-blue.svg',
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
      "story",
      "every_company_is_remote",
      "startups",
      "managing",
      "hiring",
      "work_from",
      "communication",
      "culture",
      "job_seeking",
      "security",
      "freelancing",
      "digital_nomad",
      "career_growth",
      "moonlight"
    ],
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-89429912-2"
      }
    ]
  ]
};
