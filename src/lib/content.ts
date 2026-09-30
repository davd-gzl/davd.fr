import { getCollection, type CollectionEntry } from 'astro:content';
import { lines } from '../config/site';

// Drafts are visible in dev but excluded from production builds.
const includeInBuild = (draft: boolean) => import.meta.env.PROD === false || !draft;

/** Projects sorted: featured first, then by metro line order, then newest date, then title. */
export async function getProjects(): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getCollection('projects', ({ data }) => includeInBuild(data.draft));
  return projects.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    const ar = lineRank(a.data.line);
    const br = lineRank(b.data.line);
    if (ar !== br) return ar - br;
    const ad = a.data.date?.getTime() ?? 0;
    const bd = b.data.date?.getTime() ?? 0;
    if (ad !== bd) return bd - ad;
    return a.data.title.localeCompare(b.data.title);
  });
}

/** Position of a line on the map; projects on no line sort last. */
function lineRank(line: string | undefined): number {
  const i = lines.findIndex((l) => l.id === line);
  return i === -1 ? lines.length : i;
}

/** The effective "last touched" date for a wiki entry. */
export function wikiUpdated(entry: CollectionEntry<'wiki'>): Date {
  return entry.data.updated ?? entry.data.created;
}

/** Wiki entries sorted by most-recently updated. */
export async function getWikiEntries(): Promise<CollectionEntry<'wiki'>[]> {
  const entries = await getCollection('wiki', ({ data }) => includeInBuild(data.draft));
  return entries.sort((a, b) => wikiUpdated(b).getTime() - wikiUpdated(a).getTime());
}

/** Rough reading time in minutes from raw Markdown body (≈200 wpm, min 1). */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Group wiki entries by category, categories sorted alphabetically. */
export function groupByCategory(
  entries: CollectionEntry<'wiki'>[],
): [string, CollectionEntry<'wiki'>[]][] {
  const map = new Map<string, CollectionEntry<'wiki'>[]>();
  for (const entry of entries) {
    const key = entry.data.category;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(entry);
  }
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}
