import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getAllPostsMeta, PostMeta } from '@/lib/posts';


export default function Home({ posts }: { posts: PostMeta[] }) {
return (
<Layout>
<Head>
<title>Profit Blog</title>
<meta name="description" content="Next.js + Vercel 수익형 블로그 스타터" />
</Head>
<h1 className="h1">최근 글</h1>
<ul className="post-list">
{posts.map((p) => (
<li key={p.slug}>
<div className="meta">{new Date(p.date).toLocaleDateString()}</div>
<Link href={`/posts/${p.slug}`}>{p.title}</Link>
{p.summary && <div className="meta">{p.summary}</div>}
</li>
))}
</ul>
</Layout>
);
}


export async function getStaticProps() {
const posts = getAllPostsMeta();
return { props: { posts } };
}
