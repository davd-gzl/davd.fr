import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../config/site';

// Combined feed: new wiki notes and projects, newest first.
export async function GET(context) {
  const notPublished = ({ data }) => !data.draft;
  const wiki = await getCollection('wiki', notPublished);
  const projects = await getCollection('projects', notPublished);

  const items = [
    ...wiki.map((e) => ({
      title: e.data.title,
      description: e.data.summary,
      link: `/wiki/${e.id}/`,
      pubDate: e.data.updated ?? e.data.created,
      categories: [e.data.category, ...e.data.tags],
    })),
    ...projects.map((e) => ({
      title: `Project: ${e.data.title}`,
      description: e.data.summary,
      link: `/projects/${e.id}/`,
      pubDate: e.data.date ?? e.data.created ?? new Date(),
      categories: e.data.tags,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: `${site.name} — ${site.shortName}.fr`,
    description: site.description,
    site: context.site,
    items,
    customData: `<language>en</language>`,
  });
}
