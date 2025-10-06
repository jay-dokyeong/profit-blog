import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';


const postsDir = path.join(process.cwd(), 'content', 'posts');


export type PostMeta = {
slug: string;
title: string;
date: string; // ISO
tags?: string[];
summary?: string;
};


export function getAllSlugs(): string[] {
if (!fs.existsSync(postsDir)) return [];
return fs
.readdirSync(postsDir)
.filter((f) => f.endsWith('.md'))
.map((f) => f.replace(/\.md$/, ''));
}


export function getPostBySlug(slug: string) {
const fullPath = path.join(postsDir, `${slug}.md`);
const file = fs.readFileSync(fullPath, 'utf8');
const { data, content } = matter(file);
const meta: PostMeta = {
slug,
title: String(data.title ?? slug),
date: String(data.date ?? new Date().toISOString()),
tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
summary: data.summary ? String(data.summary) : undefined,
};
return { meta, content };
}


export async function renderMarkdown(md: string) {
const processed = await remark().use(gfm).use(html).process(md);
return processed.toString();
}


export function getAllPostsMeta(): PostMeta[] {
const slugs = getAllSlugs();
const arr = slugs.map((s) => getPostBySlug(s).meta);
return arr.sort((a, b) => (a.date < b.date ? 1 : -1));
}
