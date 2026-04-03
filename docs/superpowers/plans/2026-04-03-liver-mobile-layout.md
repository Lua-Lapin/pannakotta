# Liver Card Mobile Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** スマホ（max-width: 600px）でのライバーカードレイアウトをアイコン+名前横並びに変更し、挨拶文をその下に全幅表示する。

**Architecture:** `.liver-card-greeting` を `.liver-card-body` の外へ移動し `.liver-card` 直下の flex アイテムにする。デスクトップは `flex-wrap: wrap` + `flex-basis: 100%` で挨拶文を下段全幅に。モバイルは `flex-direction` の column 指定を削除し row に戻す。

**Tech Stack:** HTML5、CSS3（Flexbox）

---

## File Map

| ファイル | 操作 | 内容 |
|---------|------|------|
| `style.css` | **修正** | `.liver-card` に `flex-wrap: wrap`、gap を `row-gap/column-gap` に分割。`.liver-card-greeting` に `flex-basis: 100%`、`margin-bottom: 0`。モバイルブロック内の column 指定削除・アイコンサイズ変更・中央揃え削除 |
| `livers.html` | **修正** | 全8カードの `.liver-card-greeting` を `.liver-card-body` の外へ移動 |

> **注意:** `livers.js`（ソーシャルリンク実装プランで作成予定）の `buildCard()` 関数も同じHTML構造に更新する必要があるが、このプランのスコープ外。ソーシャルリンク実装プラン実行時に対応すること。

---

## Task 1: `style.css` — デスクトップとモバイルのCSS更新

**Files:**
- Modify: `style.css:248-257`（`.liver-card` ルール）
- Modify: `style.css:286-293`（`.liver-card-greeting` ルール）
- Modify: `style.css:386-408`（モバイルブロック内の liver-card 系ルール）

- [ ] **Step 1: `.liver-card` に `flex-wrap: wrap` を追加し、gap を行列で分割する**

`style.css` の 248–257 行（`.liver-card` ルール）を以下に置き換える:

```css
.liver-card {
  display: flex;
  flex-wrap: wrap;
  column-gap: 36px;
  row-gap: 16px;
  align-items: flex-start;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 32px;
  max-width: 720px;
  margin: 0 auto 24px;
}
```

- [ ] **Step 2: `.liver-card-greeting` に `flex-basis: 100%` を追加し `margin-bottom` を削除する**

`style.css` の 286–293 行（`.liver-card-greeting` ルール）を以下に置き換える:

```css
.liver-card-greeting {
  flex-basis: 100%;
  font-family: var(--font-serif);
  font-size: 14px;
  font-style: italic;
  color: var(--color-text-body);
  line-height: 1.9;
}
```

- [ ] **Step 3: モバイルブロックの liver-card 系ルールを更新する**

`style.css` の `@media (max-width: 600px)` ブロック内、386–408 行を以下に置き換える:

```css
  .liver-card {
    align-items: flex-start;
    padding: 20px 16px;
    column-gap: 16px;
    row-gap: 12px;
  }

  .liver-card--reverse {
    flex-direction: row;
  }

  .liver-card-icon {
    width: 80px;
    height: 80px;
  }

  .liver-card-tags {
    justify-content: center;
  }
```

> **変更ポイント:**
> - `flex-direction: column` を削除（row に戻る）
> - `align-items: center` → `flex-start`（アイコンと本文を上揃え）
> - `.liver-card--reverse { flex-direction: row; }` を追加（デスクトップの `row-reverse` をモバイルでリセット → 常にアイコン左）
> - `.liver-card-icon` を 120px → 80px
> - `.liver-card-body { text-align: center; }` を削除（左揃え）

- [ ] **Step 4: ブラウザで確認（デスクトップ幅）**

`livers.html` をブラウザで開く（この時点ではHTMLはまだ変更していないため挨拶文の位置は変わらない）。

確認項目:
- [ ] カードのレイアウトが崩れていないこと
- [ ] アイコンと本文が横並びのままであること

- [ ] **Step 5: コミット**

```bash
git add style.css
git commit -m "style: update liver-card layout for mobile horizontal view"
```

---

## Task 2: `livers.html` — 全8カードの挨拶文をカード直下に移動

**Files:**
- Modify: `livers.html`

- [ ] **Step 1: 1期生「るん」カードの挨拶文を移動する**

`livers.html` の「るん」カード（`<article class="liver-card">`）を以下の構造に変更する:

```html
    <!-- るん -->
    <article class="liver-card">
      <img class="liver-card-icon" src="img/lun.png" alt="るん">
      <div class="liver-card-body">
        <h3 class="liver-card-name">るん</h3>
        <p class="liver-card-name-en">LUN</p>
        <div class="liver-card-tags"></div>
      </div>
      <p class="liver-card-greeting">「あなたのいいねで気分るんるん🎵」</p>
    </article>
```

- [ ] **Step 2: 1期生「りひと」カードの挨拶文を移動する**

```html
    <!-- りひと -->
    <article class="liver-card liver-card--reverse">
      <img class="liver-card-icon" src="img/rihito.png" alt="りひと">
      <div class="liver-card-body">
        <h3 class="liver-card-name">りひと</h3>
        <p class="liver-card-name-en">RIHITO</p>
        <div class="liver-card-tags"></div>
      </div>
      <p class="liver-card-greeting">「そのいいねでポーション作るね」</p>
    </article>
```

- [ ] **Step 3: 1期生「ちづ」カードの挨拶文を移動する**

```html
    <!-- ちづ -->
    <article class="liver-card">
      <img class="liver-card-icon" src="img/chizu.png?v=2" alt="ちづ">
      <div class="liver-card-body">
        <h3 class="liver-card-name">ちづ</h3>
        <p class="liver-card-name-en">CHIZU</p>
        <div class="liver-card-tags"></div>
      </div>
      <p class="liver-card-greeting">「君のいいねがちづのこころに刺さったよ」</p>
    </article>
```

- [ ] **Step 4: 2期生「柳 琴葉」カードの挨拶文を移動する**

```html
    <!-- 柳 琴葉 -->
    <article class="liver-card">
      <img class="liver-card-icon" src="img/kotoha.png" alt="柳 琴葉">
      <div class="liver-card-body">
        <h3 class="liver-card-name">柳 琴葉</h3>
        <p class="liver-card-name-en">YANAGI KOTOHA</p>
        <div class="liver-card-tags"></div>
      </div>
      <p class="liver-card-greeting">「あなたのいいね、特別なアロマに調合しとくね」</p>
    </article>
```

- [ ] **Step 5: 2期生「雪」カードの挨拶文を移動する**

```html
    <!-- 雪 -->
    <article class="liver-card liver-card--reverse">
      <img class="liver-card-icon" src="img/yuki.png" alt="雪">
      <div class="liver-card-body">
        <h3 class="liver-card-name">雪</h3>
        <p class="liver-card-name-en">YUKI</p>
        <div class="liver-card-tags"></div>
      </div>
      <p class="liver-card-greeting">「君のいいねで雪が積もるよ」</p>
    </article>
```

- [ ] **Step 6: 2期生「一藤 ジュリ」カードの挨拶文を移動する**

```html
    <!-- 一藤 ジュリ -->
    <article class="liver-card">
      <img class="liver-card-icon" src="img/juri.png" alt="一藤 ジュリ">
      <div class="liver-card-body">
        <h3 class="liver-card-name">一藤 ジュリ</h3>
        <p class="liver-card-name-en">ICHIFUJI JURI</p>
        <div class="liver-card-tags"></div>
      </div>
      <p class="liver-card-greeting">「あなたに藤のご加護がありますように」</p>
    </article>
```

- [ ] **Step 7: 2期生「梓 りん」カードの挨拶文を移動する**

```html
    <!-- 梓 りん -->
    <article class="liver-card liver-card--reverse">
      <img class="liver-card-icon" src="img/rin.png" alt="梓 りん">
      <div class="liver-card-body">
        <h3 class="liver-card-name">梓 りん</h3>
        <p class="liver-card-name-en">AZUSA RIN</p>
        <div class="liver-card-tags"></div>
      </div>
      <p class="liver-card-greeting">「私と素敵な物語作ろうね」</p>
    </article>
```

- [ ] **Step 8: 3期生「琥珀 桃」カードの挨拶文を移動する**

```html
    <!-- 琥珀 桃 -->
    <article class="liver-card">
      <img class="liver-card-icon" src="img/kohaku.png" alt="琥珀 桃">
      <div class="liver-card-body">
        <h3 class="liver-card-name">琥珀 桃</h3>
        <p class="liver-card-name-en">KOHAKU TOU</p>
        <div class="liver-card-tags"></div>
      </div>
      <p class="liver-card-greeting">「君のいいねにメロついちゃうぞ」</p>
    </article>
```

- [ ] **Step 9: ブラウザで確認（デスクトップ幅）**

`livers.html` をブラウザで開く。

確認項目:
- [ ] 全8カードの挨拶文がアイコン+本文の下に全幅で表示されること
- [ ] カードのレイアウトが崩れていないこと
- [ ] 左右交互配置（`--reverse`）がデスクトップで正しく機能していること

- [ ] **Step 10: ブラウザで確認（スマホ幅）**

ブラウザの DevTools でスマホ幅（例: 390px）に切り替える。

確認項目:
- [ ] アイコン（80px）と名前が横並びになっていること
- [ ] 挨拶文がアイコン+名前の下に全幅で表示されること
- [ ] `--reverse` カードもアイコンが左側に表示されること（モバイルでは反転しない）
- [ ] テキストが左揃えになっていること

- [ ] **Step 11: コミット**

```bash
git add livers.html
git commit -m "feat: move liver-card greeting outside body for mobile horizontal layout"
```
