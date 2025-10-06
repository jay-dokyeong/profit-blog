import Link from 'next/link';
import { ReactNode } from 'react';


export default function Layout({ children }: { children: ReactNode }) {
return (
<>
<header>
<nav>
<div><Link href="/">Profit Blog</Link></div>
<div>
<a href="/rss.xml">RSS</a>
</div>
</nav>
</header>
<main>{children}</main>
<footer>
<div>
<span>© {new Date().getFullYear()} Profit Blog</span>
<a href="/">Home</a>
</div>
</footer>
</>
);
}
