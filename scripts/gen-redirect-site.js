// GitHub Pages に残す転送サイトを書き出す。既に共有された旧URLを新ドメインへ送るため。
// 使い方: node scripts/gen-redirect-site.js https://<ドメイン>/
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// 旧URLのパス -> 新ドメインでのパス
export const PAGES = [
  'index.html',
  'livers.html',
  'news.html',
  'recruit.html',
  'relay.html',
]

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c])

export function page(target) {
  const url = escapeHtml(target)
  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ぱんなこった — 移転しました</title>
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="noindex" />
    <script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
    <noscript><meta http-equiv="refresh" content="0; url=${url}" /></noscript>
  </head>
  <body><p>移転しました: <a href="${url}">${url}</a></p></body>
</html>
`
}

export function redirectPages(base) {
  const root = new URL('./', base).href
  const pages = { '404.html': page(root) }
  for (const name of PAGES) {
    pages[name] = page(new URL(name === 'index.html' ? './' : name, root).href)
  }
  return pages
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const base = process.argv[2]
  if (!base || !/^https:\/\//.test(base)) {
    console.error('usage: node scripts/gen-redirect-site.js https://<ドメイン>/')
    process.exit(1)
  }
  const root = join(dirname(fileURLToPath(import.meta.url)), '..')
  const out = join(root, 'dist-redirect')
  for (const [path, html] of Object.entries(redirectPages(base))) {
    mkdirSync(dirname(join(out, path)), { recursive: true })
    writeFileSync(join(out, path), html)
  }
  console.log(`generated redirect site into ${out}`)
}
