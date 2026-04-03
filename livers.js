const LIVERS = [
  {
    gen: 1,
    name: "るん",
    nameEn: "LUN",
    img: "img/lun.png",
    greeting: "「あなたのいいねで気分るんるん🎵」",
    links: {
      twitter: "",
      reality: ""
    }
  },
  {
    gen: 1,
    name: "りひと",
    nameEn: "RIHITO",
    img: "img/rihito.png",
    greeting: "「そのいいねでポーション作るね」",
    links: {
      twitter: "",
      reality: ""
    }
  },
  {
    gen: 1,
    name: "ちづ",
    nameEn: "CHIZU",
    img: "img/chizu.png?v=2",
    greeting: "「君のいいねがちづのこころに刺さったよ」",
    links: {
      twitter: "",
      reality: ""
    }
  },
  {
    gen: 2,
    name: "柳 琴葉",
    nameEn: "YANAGI KOTOHA",
    img: "img/kotoha.png",
    greeting: "「あなたのいいね、特別なアロマに調合しとくね」",
    links: {
      twitter: "",
      reality: ""
    }
  },
  {
    gen: 2,
    name: "雪",
    nameEn: "YUKI",
    img: "img/yuki.png",
    greeting: "「君のいいねで雪が積もるよ」",
    links: {
      twitter: "",
      reality: ""
    }
  },
  {
    gen: 2,
    name: "一藤 ジュリ",
    nameEn: "ICHIFUJI JURI",
    img: "img/juri.png",
    greeting: "「あなたに藤のご加護がありますように」",
    links: {
      twitter: "",
      reality: ""
    }
  },
  {
    gen: 2,
    name: "梓 りん",
    nameEn: "AZUSA RIN",
    img: "img/rin.png",
    greeting: "「私と素敵な物語作ろうね」",
    links: {
      twitter: "",
      reality: ""
    }
  },
  {
    gen: 3,
    name: "琥珀 桃",
    nameEn: "KOHAKU TOU",
    img: "img/kohaku.png",
    greeting: "「君のいいねにメロついちゃうぞ」",
    links: {
      twitter: "",
      reality: ""
    }
  },
  {
    gen: 3,
    name: "めーあ",
    nameEn: "ME_A",
    img: "img/me_a.png",
    greeting: "「お茶と一緒にいただきまーす」",
    links: {
      twitter: "",
      reality: ""
    }
  },
  {
    gen: 3,
    name: "五臓六腑",
    nameEn: "GOZOROPPU",
    img: "img/roppu.png",
    greeting: "「君のいいねころちゃんの一部にしちゃうぞ」",
    links: {
      twitter: "",
      reality: ""
    }
  },
  {
    gen: 3,
    name: "羽丸 にゃる",
    nameEn: "UMARU NYAMU",
    img: "img/umaru.png",
    greeting: "",
    links: {
      twitter: "",
      reality: ""
    }
  }
];

const GEN_META = {
  1: { title: "1期生", sub: "1st Generation" },
  2: { title: "2期生", sub: "2nd Generation" },
  3: { title: "3期生", sub: "3rd Generation" }
};

function buildSocialLinks(links) {
  if (!links) return "";
  const hasTwitter = links.twitter;
  const hasReality = links.reality;
  if (!hasTwitter && !hasReality) return "";
  let html = '<div class="liver-card-links">';
  if (hasTwitter) {
    html += `<a class="liver-social-btn" href="${links.twitter}" target="_blank" rel="noopener noreferrer" title="X (Twitter)" aria-label="X (Twitter)"><i data-lucide="x" width="15" height="15"></i></a>`;
  }
  if (hasReality) {
    html += `<a class="liver-social-btn" href="${links.reality}" target="_blank" rel="noopener noreferrer" title="Reality" aria-label="Reality"><i data-lucide="diamond" width="15" height="15"></i></a>`;
  }
  html += "</div>";
  return html;
}

function buildCard(liver) {
  const gen2Class = liver.gen === 2 ? " liver-card--gen2" : "";
  return `
    <article class="liver-card${gen2Class}">
      <img class="liver-card-icon" src="${liver.img}" alt="${liver.name}">
      <div class="liver-card-body">
        <h3 class="liver-card-name">${liver.name}</h3>
        <p class="liver-card-name-en">${liver.nameEn}</p>
        ${buildSocialLinks(liver.links)}
      </div>
      <p class="liver-card-greeting">${liver.greeting}</p>
    </article>`;
}

function renderLivers() {
  const container = document.getElementById("livers-container");
  if (!container) return;

  const groups = {};
  LIVERS.forEach(liver => {
    if (!groups[liver.gen]) groups[liver.gen] = [];
    groups[liver.gen].push(liver);
  });

  const allGens = [1, 2, 3];
  let html = "";

  allGens.forEach((gen, sectionIndex) => {
    const meta = GEN_META[gen] || { title: `${gen}期生`, sub: `${gen}th Generation` };
    const livers = groups[gen] || [];
    const isFirst = sectionIndex === 0;

    if (!isFirst) html += '<hr class="gen-separator">';

    const paddingStyle = isFirst ? "" : ' style="padding-top:0;"';
    html += `<div class="gen-section"${paddingStyle}>`;
    html += `
      <div class="gen-header">
        <h2 class="gen-title">${meta.title}</h2>
        <p class="gen-sub">${meta.sub}</p>
        <div class="gen-divider"></div>
      </div>`;

    if (livers.length === 0) {
      html += '<p style="text-align:center;color:var(--color-text-muted);font-size:13px;letter-spacing:1px;padding-bottom:32px;">✦ &nbsp; 準備中 &nbsp; ✦</p>';
    } else {
      livers.forEach(liver => {
        html += buildCard(liver);
      });
    }

    html += "</div>";
  });

  container.innerHTML = html;
}

renderLivers();
lucide.createIcons();
