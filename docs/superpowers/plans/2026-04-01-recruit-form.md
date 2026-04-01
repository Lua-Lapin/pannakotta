# 新人募集フォームページ Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 新人募集フォームページ `recruit.html` を新規作成し、既存ページのナビに「新人募集」リンクを追加する。

**Architecture:** 静的HTMLページ1枚。`style.css` を共通スタイルとして読み込み、フォーム固有スタイルはページ内 `<style>` に記述。フォーム送信はJavaScriptによるダミー処理（ページ遷移なし）。

**Tech Stack:** HTML, CSS (既存 style.css), Vanilla JavaScript

---

## File Structure

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `recruit.html` | 新人募集フォームページ全体 |
| Modify | `index.html` | ナビに「新人募集」リンク追加 |
| Modify | `livers.html` | ナビに「新人募集」リンク追加 |

---

### Task 1: `recruit.html` を作成する

**Files:**
- Create: `recruit.html`

- [ ] **Step 1: `recruit.html` を作成する**

以下の内容で `/Users/lua/projects/hp/recruit.html` を作成する。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>新人募集 — ぱんなこった</title>
  <link rel="stylesheet" href="style.css?v=20260401">
  <style>
    /* recruit.html 固有スタイル */
    .page-header {
      padding: 64px 48px 48px;
      background: var(--color-bg);
      border-bottom: 1px solid var(--color-border);
      text-align: center;
    }

    .page-copy {
      font-size: 13px;
      color: var(--color-text-body);
      line-height: 2.2;
      max-width: 440px;
      margin: 0 auto;
    }

    .form-section {
      padding: 56px 48px;
      background: var(--color-bg-sub);
    }

    .form-wrap {
      max-width: 560px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-label {
      font-size: 11px;
      letter-spacing: 2px;
      color: var(--color-text-muted);
      text-transform: uppercase;
    }

    .form-label .required {
      color: var(--color-accent);
      margin-left: 4px;
      font-size: 10px;
    }

    .form-input {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      padding: 10px 14px;
      font-family: var(--font-body);
      font-size: 13px;
      color: var(--color-text);
      outline: none;
      width: 100%;
    }

    .form-input:focus {
      border-color: var(--color-accent);
    }

    textarea.form-input {
      resize: vertical;
      min-height: 100px;
    }

    .form-divider {
      border: none;
      border-top: 1px dashed var(--color-border);
      margin: 4px 0;
    }

    .form-submit {
      display: block;
      width: 100%;
      background: var(--color-accent);
      color: var(--color-on-accent);
      padding: 12px 40px;
      font-family: var(--font-serif);
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      margin-top: 8px;
      transition: opacity 0.2s;
    }

    .form-submit:hover {
      opacity: 0.85;
    }

    /* サンクスメッセージ（初期非表示） */
    .thanks {
      display: none;
      text-align: center;
      padding: 48px 20px;
    }

    .thanks-title {
      font-family: var(--font-serif);
      font-size: 22px;
      font-style: italic;
      color: var(--color-text);
      margin-bottom: 12px;
    }

    .thanks-body {
      font-size: 13px;
      color: var(--color-text-body);
      line-height: 2.2;
      margin-bottom: 20px;
    }

    .thanks-note {
      font-size: 11px;
      color: var(--color-text-muted);
    }

    @media (max-width: 600px) {
      .page-header {
        padding: 48px 20px 40px;
      }

      .form-section {
        padding: 48px 20px;
      }
    }
  </style>
</head>
<body>

  <nav class="nav">
    <a href="index.html" class="nav-logo">ぱんな<em>こった</em></a>
    <ul class="nav-links">
      <li><a href="index.html#concept">コンセプト</a></li>
      <li><a href="livers.html">ライバー</a></li>
      <li><a href="index.html#news">お知らせ</a></li>
      <li><a href="recruit.html">新人募集</a></li>
    </ul>
  </nav>

  <main>
    <div class="page-header">
      <p class="section-label">Recruit</p>
      <h1 class="section-title">新人募集</h1>
      <div class="section-divider"></div>
      <p class="page-copy">
        あなたの個性が、ぱんなこったをもっと豊かにする。<br>
        配信経験は問いません。ジャンルも問いません。<br>
        「やってみたい」という気持ちだけ持って、<br>
        ここに飛び込んできてください。
      </p>
    </div>

    <div class="form-section">
      <div class="form-wrap">

        <form id="recruit-form">
          <div style="display:flex;flex-direction:column;gap:20px;">

            <div class="form-field">
              <label class="form-label" for="name">ハンドルネーム<span class="required">*</span></label>
              <input class="form-input" type="text" id="name" name="name" placeholder="例：ぱんだ太郎" required>
            </div>

            <div class="form-field">
              <label class="form-label" for="age">年齢<span class="required">*</span></label>
              <input class="form-input" type="text" id="age" name="age" placeholder="例：22" required>
            </div>

            <hr class="form-divider">

            <div class="form-field">
              <label class="form-label" for="email">連絡先メール<span class="required">*</span></label>
              <input class="form-input" type="email" id="email" name="email" placeholder="example@email.com" required>
            </div>

            <div class="form-field">
              <label class="form-label" for="sns">SNS URL</label>
              <input class="form-input" type="url" id="sns" name="sns" placeholder="https://x.com/yourname">
            </div>

            <div class="form-field">
              <label class="form-label" for="sample">サンプル動画・配信URL</label>
              <input class="form-input" type="url" id="sample" name="sample" placeholder="https://youtube.com/...">
            </div>

            <hr class="form-divider">

            <div class="form-field">
              <label class="form-label" for="pr">活動実績・自己PR<span class="required">*</span></label>
              <textarea class="form-input" id="pr" name="pr" placeholder="これまでの活動や、やりたいことを自由に書いてください。" required></textarea>
            </div>

            <div class="form-field">
              <label class="form-label" for="message">その他・メッセージ</label>
              <textarea class="form-input" id="message" name="message" placeholder="質問や伝えたいことがあればどうぞ。"></textarea>
            </div>

            <button type="submit" class="form-submit">応募する — Apply</button>
          </div>
        </form>

        <div class="thanks" id="thanks">
          <p class="thanks-title">ありがとうございます</p>
          <p class="thanks-body">
            応募ありがとうございます。<br>
            ３営業日以内にご連絡差し上げます。
          </p>
          <p class="thanks-note">嘘ですけど</p>
        </div>

      </div>
    </div>
  </main>

  <footer class="footer">
    <strong>ぱんなこった</strong>&nbsp;|&nbsp;© 2026 Pannacotta All Rights Reserved.
  </footer>

  <script>
    document.getElementById('recruit-form').addEventListener('submit', function(e) {
      e.preventDefault();
      this.style.display = 'none';
      document.getElementById('thanks').style.display = 'block';
    });
  </script>

</body>
</html>
```

- [ ] **Step 2: ブラウザで動作確認**

`recruit.html` をブラウザで開き、以下を確認する：
- ページが正しく表示される
- 必須項目（名前・年齢・メール・自己PR）を入力して「応募する」を押すとフォームが消えてサンクスメッセージが出る
- 「嘘ですけど」が小さく表示される
- スマホ幅（600px以下）で崩れがないこと

- [ ] **Step 3: コミット**

```bash
git add recruit.html
git commit -m "feat: add recruit form page"
```

---

### Task 2: 既存ページのナビに「新人募集」リンクを追加する

**Files:**
- Modify: `index.html`（`.nav-links` の末尾に1行追加）
- Modify: `livers.html`（`.nav-links` の末尾に1行追加）

- [ ] **Step 1: `index.html` のナビを更新する**

`index.html` の以下の行を変更する：

変更前（`index.html` 53行目付近）:
```html
      <li><a href="#news">お知らせ</a></li>
    </ul>
```

変更後:
```html
      <li><a href="#news">お知らせ</a></li>
      <li><a href="recruit.html">新人募集</a></li>
    </ul>
```

- [ ] **Step 2: `livers.html` のナビを更新する**

`livers.html` の以下の行を変更する：

変更前（`livers.html` 17行目付近）:
```html
      <li><a href="index.html#news">お知らせ</a></li>
    </ul>
```

変更後:
```html
      <li><a href="index.html#news">お知らせ</a></li>
      <li><a href="recruit.html">新人募集</a></li>
    </ul>
```

- [ ] **Step 3: ブラウザで動作確認**

`index.html` と `livers.html` をブラウザで開き、ナビに「新人募集」が表示されクリックで `recruit.html` に遷移することを確認する。

- [ ] **Step 4: コミット**

```bash
git add index.html livers.html
git commit -m "feat: add recruit link to nav"
```
