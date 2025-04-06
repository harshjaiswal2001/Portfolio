import Parser from 'rss-parser';

export async function GET() {
    const parser = new Parser();
    const mediumFeed = await parser.parseURL('https://medium.com/feed/@harshjaiswal857');

    const posts = mediumFeed.items.slice(0, 5).map((item) => ({
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || '',
        contentSnippet: item.contentSnippet || '',
    }));

    return Response.json(posts);
}
