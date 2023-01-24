function generateSiteMap() {
    return `
    <xml version="1.0" encoding="UTF-8">
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <!--We manually set the two URLs we know already-->
            <url>
                <loc>https://www.tasosgkagkas.com/smas</loc>
                <lastmod>2023-01-01</lastmod>
                <priority>0.5</priority>
            </url>
            <url>
                <loc>https://www.tasosgkagkas.com/mse</loc>
                <lastmod>2023-01-01</lastmod>
                <priority>0.5</priority>
            </url>
            <url>
                <loc>https://www.tasosgkagkas.com/</loc>
                <lastmod>2023-01-01</lastmod>
                <priority>0.6</priority>
            </url>
        </urlset>
    </xml>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    const sitemap = generateSiteMap();

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
