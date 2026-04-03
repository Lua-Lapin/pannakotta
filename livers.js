const LIVERS = [
  {
    gen: 1,
    name: "るん",
    nameEn: "LUN",
    img: "img/lun.png",
    greeting: "「あなたのいいねで気分るんるん🎵」",
    links: {
      twitter: "https://x.com/Lun222Lun",
      reality: "https://reality.app/profile/cce744e4?adj_t=8ogcewh_z9yhix5"
    }
  },
  {
    gen: 1,
    name: "りひと",
    nameEn: "RIHITO",
    img: "img/rihito.png",
    greeting: "「そのいいねでポーション作るね」",
    links: {
      twitter: "https://x.com/ritorito315",
      reality: "https://reality.app/profile/3684fd87?adj_t=8ogcewh_z9yhix5"
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
      reality: "https://reality.app/profile/ecfd51e0?adj_t=8ogcewh_z9yhix5"
    }
  },
  {
    gen: 2,
    name: "柳 琴葉",
    nameEn: "YANAGI KOTOHA",
    img: "img/kotoha.png",
    greeting: "「あなたのいいね、特別なアロマに調合しとくね」",
    links: {
      twitter: "https://x.com/Y_Kotoha321",
      reality: "https://reality.app/profile/204e6e74?adj_t=8ogcewh_z9yhix5"
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
      reality: "https://reality.app/profile/168eb0d5?adj_t=8ogcewh_z9yhix5"
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
      reality: "https://reality.app/profile/b6cb2e54?adj_t=8ogcewh_z9yhix5"
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
      reality: "https://reality.app/profile/21100160?adj_t=8ogcewh_z9yhix5"
    }
  },
  {
    gen: 3,
    name: "琥珀 桃",
    nameEn: "KOHAKU TOU",
    img: "img/kohaku.png",
    greeting: "「君のいいねにメロついちゃうぞ」",
    links: {
      twitter: "https://x.com/hakutooooooooou",
      reality: "https://reality.app/profile/b1210d80?adj_t=8ogcewh_z9yhix5"
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
      reality: "https://reality.app/profile/2a226c35?adj_t=8ogcewh_z9yhix5"
    }
  },
  {
    gen: 3,
    name: "五臓六腑",
    nameEn: "GOZOROPPU",
    img: "img/roppu.png",
    greeting: "「君のいいね、ころちゃんの一部にしちゃうぞ」",
    links: {
      twitter: "https://x.com/axkhq6",
      reality: "https://reality.app/profile/17d13ff1?adj_t=8ogcewh_z9yhix5"
    }
  },
  {
    gen: 3,
    name: "羽丸 にゃる",
    nameEn: "UMARU NYAMU",
    img: "img/umaru.png",
    greeting: "",
    links: {
      twitter: "https://x.com/niyyamu",
      reality: "https://reality.app/profile/9108e6f4?adj_t=8ogcewh_z9yhix5"
    }
  },
  {
    gen: 4,
    name: "花筏 竜胆",
    nameEn: "HANAIKADA RINDOU",
    img: "img/rindou.png",
    greeting: "「りーん、りん！君のいいね筏で運ぶね！」",
    links: {
      twitter: "https://x.com/871kada_rindo",
      reality: "https://reality.app/profile/c1857de2?adj_t=8ogcewh_z9yhix5"
    }
  },
  {
    gen: 4,
    name: "さとう",
    nameEn: "SATO",
    img: "img/sato.png",
    greeting: "「いいねありがとう！そのいいね誤タップでねえが？」",
    links: {
      twitter: "https://x.com/bibasato0712",
      reality: "https://reality.app/profile/8dac3cf7?adj_t=8ogcewh_z9yhix5"
    }
  }
];

const GEN_META = {
  1: { title: "1期生", sub: "1st Generation" },
  2: { title: "2期生", sub: "2nd Generation" },
  3: { title: "3期生", sub: "3rd Generation" },
  4: { title: "4期生", sub: "4th Generation" }
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
        <div class="liver-card-name-group">
          <h3 class="liver-card-name">${liver.name}</h3>
          <p class="liver-card-name-en">${liver.nameEn}</p>
        </div>
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

  const allGens = [1, 2, 3, 4];
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
