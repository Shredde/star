const facts = [
  '银河系的直径大约为 10 万光年，包含超过一千亿颗恒星。',
  '国际空间站以每小时约 27600 公里的速度绕地球飞行。',
  '人类目前已经确认的系外行星数量超过 5000 个。',
  '火星上的一天长度约为 24 小时 37 分钟，比地球稍长。',
  '土星的密度小于水，如果有一个足够大的水池，它能漂浮起来。',
  '木星的大红斑是一场持续至少 350 年的巨大风暴。'
];

const factButton = document.getElementById('fact-button');
const factDisplay = document.getElementById('fact-display');
const plannerForm = document.getElementById('planner-form');
const planOutput = document.getElementById('plan-output');

factButton?.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];
  factDisplay.textContent = `🌌 ${fact}`;
});

plannerForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(plannerForm);
  const planet = formData.get('planet');
  const days = formData.get('days');
  const goal = formData.get('goal');

  const summary = `
    <h3>旅程概要</h3>
    <p><strong>目的地：</strong> ${planet}</p>
    <p><strong>旅程时长：</strong> ${days} 天</p>
    <p><strong>主要目标：</strong> ${goal}</p>
    <p>祝你旅途愉快，记得带上好奇心与探索精神！🚀</p>
  `;

  planOutput.innerHTML = summary;
  planOutput.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
