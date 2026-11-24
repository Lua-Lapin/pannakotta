# ぱんなこった サイト

VTuber事務所「ぱんなこった」の静的サイト。Vite + React + Tailwind でビルドし、
ビルド成果物 (`dist/`) を Cloudflare Workers の静的アセットとして配信する。

- 公開URL: https://pannako.lun222.com/
- 配信先の指定: `wrangler.jsonc` の `routes`（カスタムドメイン）

## ローカル

```bash
npm install
npm run dev
```

## デプロイ

```bash
npm run deploy
```

`npm run build` して `wrangler deploy` するだけ。初回のみ `npx wrangler login` が必要。
`lun222.com` が Cloudflare 上のゾーンなので、`pannako` のDNSレコードは
カスタムドメイン設定時に自動で作られる。

GitHub Pages へのデプロイ（`.github/workflows/deploy.yml`）は廃止した。
