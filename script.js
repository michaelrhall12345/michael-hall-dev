/* ============================================================
   MICHAEL HALL — michael-hall.dev
   script.js — hover preview logic
   ============================================================ */

const projects = {
  RA: {
    name: 'Reaper Actual',
    desc: 'Production role at Distinct Possibility Studios. Built and shipped AI and gameplay systems for a live UE5 extraction shooter.',
    tags: ['Behavior Trees', 'EQS', 'Smart Objects', 'Wwise', 'Replication', 'C++', 'GAS'],
    cta:  '→ view full breakdown'
  },
  TN: {
    name: 'Tooth & Nail',
    desc: 'Solo project. Designing and engineering a server-authoritative multiplayer fighter — combat pipeline, posture system, hitbox resolution.',
    tags: ['Combat Pipeline', 'Server Auth', 'Guard States', 'Animation BPs', 'Posture System'],
    cta:  '→ open devlog'
  },
  LLM: {
    name: 'LLM NPC Plugin',
    desc: 'UE5 plugin integrating GPT-driven NPC dialogue. Tunable personality profiles and behavioral data assets. OpenAI API integration.',
    tags: ['OpenAI API', 'C++', 'Plugin Arch', 'Data Assets', 'NPC Design'],
    cta:  '→ view on GitHub'
  },
  DEMOS: {
    name: 'Playable Demos',
    desc: 'Stay A While and CyberSekiro. Shipped builds on itch.io. C++ combat, parry systems, class final team lead.',
    tags: ['Parry Systems', 'Lock-on', 'Blendspaces', 'Hit Detection', 'Team Lead'],
    cta:  '→ play on itch.io'
  }
};

function showPreview(key) {
  const p = projects[key];
  if (!p) return;

  const hint    = document.getElementById('preview-hint');
  const content = document.getElementById('preview-content');
  const panel   = document.querySelector('.preview-panel');

  if (hint)    hint.style.display    = 'none';
  if (content) content.style.display = 'flex';
  if (panel)   panel.classList.add('active');

  const nameEl = document.getElementById('preview-name');
  const descEl = document.getElementById('preview-desc');
  const tagsEl = document.getElementById('preview-tags');
  const ctaEl  = document.getElementById('preview-cta');

  if (nameEl) nameEl.textContent = '// ' + p.name;
  if (descEl) descEl.textContent = p.desc;
  if (tagsEl) tagsEl.innerHTML   = p.tags.map(t => `<span class="preview-tag">${t}</span>`).join('');
  if (ctaEl)  ctaEl.textContent  = p.cta;
}

function hidePreview() {
  const hint    = document.getElementById('preview-hint');
  const content = document.getElementById('preview-content');
  const panel   = document.querySelector('.preview-panel');

  if (hint)    hint.style.display    = 'block';
  if (content) content.style.display = 'none';
  if (panel)   panel.classList.remove('active');
}

// Wire up via JS event listeners instead of inline HTML attributes
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card[data-project]').forEach(card => {
    card.addEventListener('mouseenter', () => showPreview(card.dataset.project));
    card.addEventListener('mouseleave', hidePreview);
  });
});