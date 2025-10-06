---
title: "안녕하세요, 수익형 블로그"
date: "2025-10-06"
tags: ["시작", "가이드"]
summary: "Next.js + Vercel로 무설치 스타터 구성"
---


여기는 **첫 글**입니다. 마크다운으로 작성하고 커밋하면 자동 배포돼요.


- 목록 페이지에 자동으로 나타납니다.
- 본문 중간에 광고를 넣고 싶으면 컴포넌트로 배치 가능해요.


```bash
# 코드 블록 예시
pnpm dlx cowsay "hello"

## `pages/_app.tsx`
```tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';


export default function App({ Component, pageProps }: AppProps) {
return <Component {...pageProps} />;
}
