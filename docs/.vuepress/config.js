module.exports = {
  title: "Remote Work Encyclopedia",
  description:
    "Moonlight's tactical guide to working from anywhere! It covers getting things done, hiring great people, and growing quickly - based on proven tactics from the companies and developers in Moonlight's global community.",
  serviceWorker: true,
  themeConfig: {
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
    repo: "moonlightwork/remote-work-encyclopedia",
    repoLabel: "Contribute",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Suggest an improvement",
    smoothScroll: true,
    nav: [
      {
        text: "Moonlight",
        link: "https://www.moonlightwork.com",
        rel: "noopener"
      }
    ]
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
