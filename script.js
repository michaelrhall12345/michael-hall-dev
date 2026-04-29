/* ============================================================
   MICHAEL HALL — michael-hall.dev
   script.js — hover preview logic
   ============================================================ */

const projects = {
  RA: {
    name:  'Reaper Actual',
    img:   '../assets/images/ra-thumb.jpg',
    desc:  'Production role at Distinct Possibility Studios. Built and shipped AI and gameplay systems for a live UE5 extraction shooter.',
    tags:  ['Behavior Trees', 'EQS', 'Smart Objects', 'Wwise', 'Replication', 'C++', 'GAS'],
    cta:   '→ view full breakdown'
  },
  TN: {
    name:  'Tooth & Nail',
    img:   '../assets/images/tn-thumb.jpg',
    desc:  'Solo project. Designing and engineering a server-authoritative multiplayer fighter — combat pipeline, posture system, hitbox resolution.',
    tags:  ['Combat Pipeline', 'Server Auth', 'Guard States', 'Animation BPs', 'Posture System'],
    cta:   '→ open devlog'
  },
  MP: {
    name:  'Multiplayer Plugin',
    img:   '../assets/images/mp-thumb.jpg',
    desc:  'Standalone UE5 plugin providing reusable session management, matchmaking hooks, and Online Subsystem abstractions.',
    tags:  ['Online Subsystem', 'Session Mgmt', 'Matchmaking', 'Plugin Arch', 'C++'],
    cta:   '→ view on GitHub'
  },
  DEMOS: {
    name:  'Playable Demos',
    img:   '../assets/images/demos-thumb.jpg',
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

  // name
  document.getElementById('preview-name').textContent = '// ' + p.name;

  // image — show if it loads, fall back to placeholder text
  const img         = document.getElementById('preview-img');
  const placeholder = document.getElementById('preview-placeholder');
  img.src           = p.img;
  img.alt           = p.name;
  img.style.display = 'none';
  placeholder.style.display = 'block';

  img.onload  = () => { img.style.display = 'block'; placeholder.style.display = 'none'; };
  img.onerror = () => { img.style.display = 'none';  placeholder.style.display = 'block'; };

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
}