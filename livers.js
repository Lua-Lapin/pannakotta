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
      twitter: "https://x.com/riniine",
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
    greeting: "「君のいいね、ごぞちゃんの一部にしちゃうぞ」",
    links: {
      twitter: "https://x.com/axkhq6",
      reality: "https://reality.app/profile/17d13ff1?adj_t=8ogcewh_z9yhix5"
    }
  },
  {
    gen: 3,
    name: "羽丸 にゃむ",
    nameEn: "UMARU NYAMU",
    img: "img/umaru.png",
    greeting: "「にくきゅうﾊﾟﾝﾁ🫶🤜」",
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
  },
  {
    gen: 4,
    name: "夜廻 葉理",
    nameEn: "YOMAWARI RAMINA",
    img: "img/ramina.png",
    greeting: "「貴方のいいねが私の励みになります！」",
    links: {
      twitter: "https://x.com/canazawa0717",
      reality: "https://reality.app/profile/8ab45997?adj_t=8ogcewh_z9yhix5"
    }
  },
  {
    gen: 99,
    name: "ユ²",
    nameEn: "YUYU",
    img: "img/yuyu.png",
    greeting: "",
    links: {
      twitter: "",
      reality: "https://reality.app/profile/0fbd49f4?adj_t=8ogcewh_z9yhix5"
    }
  }
];

function buildSocialLinks(links) {
  if (!links) return "";
  const hasTwitter = links.twitter;
  const hasReality = links.reality;
  if (!hasTwitter && !hasReality) return "";
  let html = '<div class="liver-card-links">';
  // Note: links.twitter and links.reality are hardcoded literals in LIVERS — not user input.
  // If LIVERS is ever loaded from an external source, sanitize these values first.
  if (hasTwitter) {
    html += `<a class="liver-social-btn" href="${links.twitter}" target="_blank" rel="noopener noreferrer" title="X (Twitter)" aria-label="X (Twitter)"><i data-lucide="x" width="15" height="15"></i></a>`;
  }
  if (hasReality) {
    html += `<a class="liver-social-btn" href="${links.reality}" target="_blank" rel="noopener noreferrer" title="Reality" aria-label="Reality"><i data-lucide="diamond" width="15" height="15"></i></a>`;
  }
  html += "</div>";
  return html;
}

function renderLivers() {
  const container = document.getElementById("livers-container");
  if (!container) return;

  let lastActivatedCell = null;

  // モーダルオーバーレイを body に追加
  const overlay = document.createElement("div");
  overlay.className = "liver-modal-overlay hidden";
  overlay.innerHTML = `
    <div class="liver-modal" role="dialog" aria-modal="true" aria-labelledby="liver-modal-name-heading">
      <button class="liver-modal-close" aria-label="閉じる">×</button>
      <img class="liver-modal-icon" alt="">
      <h3 class="liver-modal-name" id="liver-modal-name-heading"></h3>
      <p class="liver-modal-name-en"></p>
      <p class="liver-modal-greeting"></p>
      <div class="liver-modal-links"></div>
    </div>`;
  document.body.appendChild(overlay);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal(overlay, lastActivatedCell);
  });
  overlay.querySelector(".liver-modal-close").addEventListener("click", () => closeModal(overlay, lastActivatedCell));
  overlay.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal(overlay, lastActivatedCell);
  });

  // アイコングリッドを描画
  let html = '<div class="livers-icon-grid">';
  LIVERS.forEach((liver, index) => {
    html += `<div class="liver-icon-cell" data-index="${index}" role="button" tabindex="0" aria-label="${liver.name}の詳細を見る">
      <img src="${liver.img}" alt="${liver.name}" loading="lazy">
      <span class="liver-icon-cell-name">${liver.name}</span>
    </div>`;
  });
  html += "</div>";
  container.innerHTML = html;

  // クリック・キーボードイベント
  container.querySelectorAll(".liver-icon-cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      lastActivatedCell = cell;
      openModal(overlay, LIVERS[Number(cell.dataset.index)]);
    });
    cell.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        lastActivatedCell = cell;
        openModal(overlay, LIVERS[Number(cell.dataset.index)]);
      }
    });
  });
}

function openModal(overlay, liver) {
  overlay.querySelector(".liver-modal-icon").src = liver.img;
  overlay.querySelector(".liver-modal-icon").alt = liver.name;
  overlay.querySelector(".liver-modal-name").textContent = liver.name;
  overlay.querySelector(".liver-modal-name-en").textContent = liver.nameEn;
  overlay.querySelector(".liver-modal-greeting").textContent = liver.greeting;
  overlay.querySelector(".liver-modal-links").innerHTML = buildSocialLinks(liver.links);
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
  overlay.querySelector(".liver-modal-close").focus();
}

function closeModal(overlay, returnFocusTo) {
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
  if (returnFocusTo) returnFocusTo.focus();
}

renderLivers();
