# Liver Card Mobile Layout — Design Spec

**Date:** 2026-04-03
**Status:** Approved

---

## Overview

スマホ（max-width: 600px）でのライバーカードレイアウトを変更する。現在はアイコンと本文が縦並び（column）になっているが、アイコン・名前・SNSリンクを横並び（row）にし、挨拶文をその下に全幅で表示する。

---

## HTML構造の変更

`.liver-card-greeting` を `.liver-card-body` の内側から `.liver-card` の直接子に移動する。

**変更前:**
```html
<article class="liver-card">
  <img class="liver-card-icon" src="..." alt="...">
  <div class="liver-card-body">
    <h3 class="liver-card-name">...</h3>
    <p class="liver-card-name-en">...</p>
    <p class="liver-card-greeting">...</p>
    <div class="liver-card-links">...</div>
  </div>
</article>
```

**変更後:**
```html
<article class="liver-card">
  <img class="liver-card-icon" src="..." alt="...">
  <div class="liver-card-body">
    <h3 class="liver-card-name">...</h3>
    <p class="liver-card-name-en">...</p>
    <div class="liver-card-links">...</div>
  </div>
  <p class="liver-card-greeting">...</p>
</article>
```

### 対象ファイル

- `livers.html` — 静的カード8枚すべてを更新
- `livers.js` — `buildCard()` 関数のHTML文字列を更新（ソーシャルリンク実装プランで作成予定のファイル）

---

## CSS変更

### デスクトップ（デフォルト）

`.liver-card` に `flex-wrap: wrap` を追加する。`.liver-card-greeting` に `flex-basis: 100%` を追加し、アイコン+本文の下に全幅で折り返す。

```css
/* 変更前 */
.liver-card {
  display: flex;
  gap: 36px;
  align-items: flex-start;
  /* ... */
}

/* 変更後 */
.liver-card {
  display: flex;
  flex-wrap: wrap;   /* 追加 */
  gap: 36px;
  align-items: flex-start;
  /* ... */
}

.liver-card-greeting {
  flex-basis: 100%;  /* 追加 */
  /* 既存スタイルはそのまま */
}
```

デスクトップでの見た目:
```
[icon]  名前
        NAME-EN
        ● ●
「挨拶文（カード全幅）」
```

左右交互レイアウト（`.liver-card--reverse`）はデスクトップでそのまま維持。

### モバイル（max-width: 600px）

```css
@media (max-width: 600px) {
  .liver-card {
    /* flex-direction: column を削除 → row に戻す */
    align-items: flex-start;  /* center から変更 */
    padding: 24px 20px;
    gap: 16px;
  }

  .liver-card--reverse {
    /* flex-direction: column を削除 → row のまま */
  }

  .liver-card-icon {
    width: 80px;
    height: 80px;
  }

  .liver-card-body {
    /* text-align: center を削除 → 左揃え */
  }

  .liver-card-links {
    /* justify-content: center を削除 → 左揃え */
  }
}
```

モバイルでの見た目:
```
[icon]  名前
 80px   NAME-EN
        ● ●
「挨拶文（全幅）」
```

モバイルでは `--reverse` による左右反転は行わない（常にアイコン左）。

---

## スコープ

- 変更ファイル: `livers.html`、`style.css`
- 影響ファイル（別プランで対応）: `livers.js`（`buildCard()` のHTML文字列に同じ構造変更を適用すること）
- `index.html`（トップページのライバーサムネイル）は対象外
- `recruit.html` は対象外
