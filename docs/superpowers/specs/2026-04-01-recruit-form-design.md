# 新人募集フォームページ — デザイン仕様

**Date:** 2026-04-01
**Project:** ぱんなこった HP

---

## 概要

`recruit.html` を新規作成し、既存ページからリンクを貼る。見た目のみで、フォーム送信は JavaScript によるダミー処理。

---

## ページ構成

### ナビゲーション

`index.html` と `livers.html` の `.nav-links` に「新人募集」リンクを追加。

```html
<li><a href="recruit.html">新人募集</a></li>
```

### ページヘッダー（`page-header`）

既存の `.section` パターンに準拠。

- Section label: `✦ Recruit ✦`
- H1: `新人募集`
- Divider（`.section-divider`）
- キャッチコピー（4行）:
  > あなたの個性が、ぱんなこったをもっと豊かにする。
  > 配信経験は問いません。ジャンルも問いません。
  > 「やってみたい」という気持ちだけ持って、
  > ここに飛び込んできてください。

### フォームセクション（`.form-section`）

背景は `--color-bg-sub`。`max-width: 560px` センタリング。

| フィールド | 種別 | 必須 |
|---|---|---|
| ハンドルネーム | `input[type=text]` | ✓ |
| 年齢 | `input[type=text]` | ✓ |
| 連絡先メール | `input[type=email]` | ✓ |
| SNS URL | `input[type=url]` | - |
| サンプル動画・配信URL | `input[type=url]` | - |
| 活動実績・自己PR | `textarea` | ✓ |
| その他・メッセージ | `textarea` | - |

- 必須フィールドには `*`（`--color-accent`）を表示
- フィールド間に `<hr class="form-divider">` で視覚的なグループ分け
- 送信ボタン: `応募する — Apply`（`.btn` 相当、幅100%）

### 送信後のサンクス表示

ボタンクリック時に JavaScript でフォームを非表示にし、サンクスメッセージを表示（ページ遷移なし）。

```
応募ありがとうございます。
３営業日以内にご連絡差し上げます。

嘘ですけど（小さめの文字）
```

「嘘ですけど」は `--color-text-muted`、`font-size: 11px` 程度。

---

## スタイル

- 既存の `style.css` を `<link>` で読み込む
- ページ固有スタイル（フォーム関連）は `recruit.html` 内の `<style>` ブロックに記述
- レスポンシブ: `@media (max-width: 600px)` でナビリンク非表示、padding を 20px に縮小（既存パターンと同じ）

---

## ファイル変更一覧

| ファイル | 変更内容 |
|---|---|
| `recruit.html` | 新規作成 |
| `index.html` | ナビに「新人募集」リンク追加 |
| `livers.html` | ナビに「新人募集」リンク追加 |
| `style.css` | 変更なし |
