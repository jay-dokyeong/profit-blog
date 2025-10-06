import Head from 'next/head';
import Layout from '@/components/Layout';
import AdSlot from '@/components/AdSlot';
import { getAllSlugs, getPostBySlug, renderMarkdown } from '@/lib/posts';


export default function Post({ html, title, date }: { html: string; title: string; date: string; }) {
return (
<Layout>
<Head>
<title>{title}</title>
<meta name="description" content={title} />
</Head>
<article className="article">
<div className="meta">{new Date(date).toLocaleString()}</div>
<h1 className="h1">{title}</h1>
{/* 본문 상단 광고 예시 */}
<AdSlot />
<div dangerouslySetInnerHTML={{ __html: html }} />
{/* 본문 하단 광고 예시 */}
<AdSlot />
</article>
</Layout>
);
}


export async function getStaticPaths() {
const slugs = getAllSlugs();
return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}


export async function getStaticProps({ params }: { params: { slug: string } }) {
const { meta, content } = getPostBySlug(params.slug);
const html = await renderMarkdown(content);
return { props: { html, title: meta.title, date: meta.date } };
}
