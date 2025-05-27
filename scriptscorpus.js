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
    empire: [
      "大英帝国的殖民策略",
      "帝国建筑风格",
      "后殖民语境中的帝国遗产"
    ],
    emotion: [
      "情绪地理学",
      "空间中的情绪编码",
      "集体情绪与城市仪式"
    ],
    river: [
      "泰晤士河与城市发展",
      "港口与殖民物流",
      "河流记忆的象征意义"
    ],
    archive: [
      "档案作为权力工具",
      "非官方记忆的保存",
      "数字档案与算法选择性"
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
