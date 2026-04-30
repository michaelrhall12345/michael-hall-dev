/* ============================================================
   MICHAEL HALL — michael-hall.dev
   script.js — hover preview logic
   ============================================================ */

const projects = {
  RA: {
    name:  'Reaper Actual',
    img:   'assets/images/ra-thumb.jpg',
    desc:  'Production role at Distinct Possibility Studios. Built and shipped AI and gameplay systems for a live UE5 extraction shooter.',
    tags:  ['Behavior Trees', 'EQS', 'Smart Objects', 'Wwise', 'Replication', 'C++', 'GAS'],
    cta:   '→ view full breakdown'
  },
  TN: {
    name:  'Tooth & Nail',
    img:   'assets/images/tn-thumb.jpg',
    desc:  'Solo project. Designing and engineering a server-authoritative multiplayer fighter — combat pipeline, posture system, hitbox resolution.',
    tags:  ['Combat Pipeline', 'Server Auth', 'Guard States', 'Animation BPs', 'Posture System'],
    cta:   '→ open devlog'
  },
  LLM: {
    name:  'LLM NPC Plugin',
    img:   'assets/images/llm-thumb.jpg',
    desc:  'UE5 plugin integrating GPT-driven NPC dialogue. Tunable personality profiles and behavioral data assets. OpenAI API integration.',
    tags:  ['OpenAI API', 'C++', 'Plugin Arch', 'Data Assets', 'NPC Design'],
    cta:   '→ view on GitHub'
  },
  DEMOS: {
    name:  'Playable Demos',
    img:   'assets/images/demos-thumb.jpg',
    desc:  'Stay A While (capstone, shipped) and CyberSekiro (Sekiro parry prototype). Both built in C++ with custom combat systems.',
    tags:  ['Parry Systems', 'Lock-on', 'Blendspaces', 'Hit Detection', 'Team Lead'],
    cta:   '→ play on itch.io'
  }
};

function previewProject(key) {
  const p = projects[key];
  if (!p) return;

  document.getElementById('preview-hint').style.display    = 'none';
  document.getElementById('preview-content').style.display = 'flex';

  // throb border
  document.querySelector('.preview-panel').classList.add('active');

  // name
  document.getElementById('preview-name').textContent = '// ' + p.name;

  // description
  document.getElementById('preview-desc').textContent = p.desc;

  // tags
  document.getElementById('preview-tags').innerHTML =
    p.tags.map(t => `<span class="preview-tag">${t}</span>`).join('');

  // cta
  document.getElementById('preview-cta').textContent = p.cta;
}

function clearPreview() {
  document.getElementById('preview-hint').style.display    = 'block';
  document.getElementById('preview-content').style.display = 'none';
  document.querySelector('.preview-panel').classList.remove('active');
}