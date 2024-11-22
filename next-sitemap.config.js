/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "",
    generateRobotsTxt: true,
    changefreq: "daily",
    priority: 0.7, 
    sitemapSize: 5000,
    exclude: [""],

    // Additional options
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: ["/"] },
            { userAgent: "*", disallow: [""] }
        ]
        // additionalSitemaps: [
        //     "https://www.example.com/sitemap-articles.xml" // Additional sitemaps if any
        // ]
    }
};
