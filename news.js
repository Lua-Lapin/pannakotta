const NEWS = [
  { date: "2026.04.06", badge: "入賞", text: "1期生のちずがワンデイイベントで1位獲得！" },
  { date: "2026.04.05", badge: "入賞", text: "1期生のりひとが千葉ポスターイベントで9位獲得！" },
  { date: "2026.03.08", badge: "入賞", text: "4期生の花筏 竜胆が広島ポスターイベントで19位入賞！" },
  { date: "2026.04.05", text: "5期生メンバーを公開しました" },
  { date: "2026.04.03", text: "4期生メンバーを公開しました" },
  { date: "2026.04.02", text: "3期生メンバーを公開しました" },
  { date: "2026.04.01", text: "2期生メンバーを公開しました" },
  { date: "2026.03.30", text: "ぱんなこった公式サイトをオープンしました" },
  { date: "2026.03.20", text: "1期生メンバーを公開しました" },
  { date: "2026.03.01", text: "VTuber事務所「ぱんなこった」設立" },
];

function renderNews(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = limit ? NEWS.slice(0, limit) : NEWS;
  let html = '<div class="news-list">';
  items.forEach(function(item) {
    const badge = item.badge
      ? `<span class="news-badge">${item.badge}</span>`
      : '';
    html += `<div class="news-item"><span class="news-date">${item.date}</span>${badge}<span class="news-text">${item.text}</span></div>`;
  });
  html += '</div>';
  container.innerHTML = html;
}
