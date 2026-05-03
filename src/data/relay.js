export const RELAY_EVENT = {
  title: "リレー配信",
  catchcopy: "バトンをつなごう",
  description: "ぱんなこった事務所のライバーたちが、順番にバトンをつないでいくリレー配信企画です。\n今回のGW企画テーマは「トークテーマしりとり」！前の枠のテーマの最後の文字から始まるトークテーマを2人で考えて、時間内に語ってもらいます。",
  dates: "5月3日・5月5日",
  participants: [
    { order: 1, name: "るん",        img: "img/lun.png",     realityUrl: "https://reality.app/profile/cce744e4?adj_t=8ogcewh_z9yhix5" },
    { order: 2, name: "花筏 竜胆",   img: "img/rindou.png",  realityUrl: "https://reality.app/profile/c1857de2?adj_t=8ogcewh_z9yhix5" },
    { order: 3, name: "一藤 ジュリ", img: "img/juri.png",    realityUrl: "https://reality.app/profile/b6cb2e54?adj_t=8ogcewh_z9yhix5" },
    { order: 4, name: "琥珀 桃",     img: "img/kohaku.png",  realityUrl: "https://reality.app/profile/b1210d80?adj_t=8ogcewh_z9yhix5" },
    { order: 5, name: "りひと",      img: "img/rihito.png",  realityUrl: "https://reality.app/profile/3684fd87?adj_t=8ogcewh_z9yhix5" },
    { order: 6, name: "ﾕ²",          img: "img/yuyu.png",    realityUrl: "https://reality.app/profile/0fbd49f4?adj_t=8ogcewh_z9yhix5" },
    { order: 7, name: "夜桜 りんね", img: "img/rinne.png",   realityUrl: "https://reality.app/profile/4c957cb4?adj_t=8ogcewh_z9yhix5" },
    { order: 8, name: "めーあ",      img: "img/me_a.png",    realityUrl: "https://reality.app/profile/2a226c35?adj_t=8ogcewh_z9yhix5" },
    { order: 9, name: "梓 りん",     img: "img/rin.png",     realityUrl: "https://reality.app/profile/21100160?adj_t=8ogcewh_z9yhix5" },
  ],
  schedule: [
    { slot: 1, day: "5月3日", time: "21:00〜21:30", members: [1, 2] },
    { slot: 2, day: "5月3日", time: "21:30〜22:00", members: [2, 3] },
    { slot: 3, day: "5月3日", time: "22:00〜22:30", members: [3, 4] },
    { slot: 4, day: "5月3日", time: "22:30〜23:00", members: [4, 5] },
    { slot: 5, day: "5月5日", time: "13:30〜14:00", members: [5, 6] },
    { slot: 6, day: "5月5日", time: "14:00〜14:30", members: [6, 7] },
    { slot: 7, day: "5月5日", time: "14:30〜15:00", members: [7, 8] },
    { slot: 8, day: "5月5日", time: "15:00〜15:30", members: [8, 9] },
    { slot: 9, day: "5月5日", time: "15:30〜16:00", members: [9, 1] },
  ]
}
