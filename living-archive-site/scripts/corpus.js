const params = new URLSearchParams(window.location.search);
const keyword = params.get('keyword');

document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('keyword-title');
  title.textContent = `关键词：${keyword || '未知'}`;

  const corpus = {
    opium: [
      "鸦片战争（1840-1842）",
      "东印度公司与鸦片贸易",
      "鸦片与帝国主义扩张"
    ],
    memory: [
      "集体记忆理论",
      "空间记忆的建构",
      "记忆与历史叙述的冲突"
    ],
    emotion: [
      "情绪的空间表达",
      "建筑中的感知体验",
      "AI与情绪识别"
    ],
    colonialism: [
      "殖民主义的空间遗产",
      "后殖民城市设计",
      "地名中的殖民记忆"
    ],
    archive: [
      "活档案的概念",
      "数字档案与AI",
      "非官方记忆的保存"
    ],
    algorithm: [
      "算法偏见与社会正义",
      "算法在城市治理中的角色",
      "感知数据与算法生成"
    ]
  };

  const list = document.getElementById('corpus-list');
  const content = corpus[keyword] || ['未找到该关键词对应的语料。'];

  content.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
});
