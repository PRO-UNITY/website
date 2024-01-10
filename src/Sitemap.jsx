const Sitemap = () => {
  const routes = [
    "/",
    "/about",
    "/services",
    "/services/softwareDevelopenent",
    "/services/IT-school",
    "/services/authorized-tutorial",
    "/services/coworking",
    "/services/opencourse",
    "/services/pro-community",
    "/products",
    "/contact",
    "/products/hrms",
    "/products/delivery",
  ];

  const baseUrl = "https://prounity.uz";

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${`${baseUrl}${route}`}</loc>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;

  return <div dangerouslySetInnerHTML={{ __html: sitemap }} />;
};

export default Sitemap;
