import SitemapGenerator from "react-sitemap-generator";

const routes = [
  "/home",
  "/about",
  "/services",
  "/expert-developers",
  "/students",
  "/user/:id",
  "/services/software-development",
  "/services/IT-school",
  "/services/authorized-tutorial",
  "/services/coworking",
  "/services/open-course",
  "/services/pro-community",
  "/products",
  "/contact",
  "/license",
  "/privacy-policy",
  "/advertise",
  "/products/hrms",
  "/products/delivery",
];

const baseUrl = "https://prounity.uz";

SitemapGenerator({
  url: baseUrl,
  routes: routes,
  outputFolder: "./public", // Proyekt build katalogi (public, build yoki qo'shimcha kataloglar)
  ignoreIndexFiles: true, // index.html ni ignor qilish
  fileName: "sitemap.xml",
  lastMod: true,
  priorityMap: [1.0, 0.8, 0.5],
  changefreq: "daily",
}).then(() => {
  console.log("Sitemap generated successfully");
});
