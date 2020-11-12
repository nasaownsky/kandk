module.exports = {
  siteMetadata: {
    title: `IT-company K&K TEAM`,
    description: `Разрабатываем сайты, мобильные и веб приложения, делаем дизайн.`,
    author: `@gatsbyjs`,
    keywords: `telegram bot, бот создание, веб дизайн сайта, где заказать сайт, где можно заказать сайт, дизайн официальный сайт, дизайн сайта, заказать интернет сайт,
    заказать лендинг, заказать официальный сайт, заказать сайт, заказать сайт в минске, заказать сайт беларусь, заказать сайт визитку, заказать сайт дешево, заказать сайт магазин, заказать сайт онлайн,
    заказать сайт цена, заказывать логотип, компания логотип, купить логотип, лендинг, лендинг пейдж, логотип заказ, написать бот, нарисовать логотип, разработка web приложений,
    разработка андроид приложений, разработка веб приложений, разработка дизайна сайта, разработка мобильных приложений, разработка приложений, разработка приложений для android, разработка телеграмм бота,
    сайт белор дизайн, сделать бот, создание лендинга, создание лого, создать лендинг, съемка видео, фирма логотип, фирменный логотип`,
    url: `https://kandk.team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hexagon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
