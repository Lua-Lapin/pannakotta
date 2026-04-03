const NEWS = [
  { date: "2026.04.04", text: "4期生メンバーを公開しました" },
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
    html += '<div class="news-item">'
      + '<span class="news-date">' + item.date + '</span>'
      + '<span class="news-text">' + item.text + '</span>'
      + '</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}
