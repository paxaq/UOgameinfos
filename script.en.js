// Class data (English)
const classData = {
  // Base classes
  fighter: {
    name: 'Fighter',
    type: 'Heavy Infantry',
    characters: 'Lex, Colm',
    advantages: ['archer-units', 'light-infantry'],
    disadvantages: ['magic-users', 'anti-armor'],
    description: 'Durable frontline with strong physical defense, protects allies',
    leaderEffect: 'Ranged Resistance — reduces ranged damage'
  },
  arbalist: {
    name: 'Arbalist',
    type: 'Heavy Crossbow',
    characters: 'Liza',
    advantages: ['flying-units', 'medium-armor'],
    disadvantages: ['heavy-armor', 'cavalry-charge'],
    description: 'High accuracy and power; highly effective versus flying units',
    leaderEffect: 'Ranged Support — enhances ranged attacks'
  },
  cleric: {
    name: 'Cleric',
    type: 'Healing Support',
    characters: 'Sharon, Tatiana, Primm',
    advantages: ['undead-units', 'status-support'],
    disadvantages: ['physical-assault', 'archer-focus'],
    description: 'Restores HP and supports allies with healing magic',
    leaderEffect: 'Healing Support — sustained healing in battle'
  },
  thief: {
    name: 'Thief',
    type: 'Agile Evasion',
    characters: 'Various can promote into',
    advantages: ['magic-users', 'evasion-tactics'],
    disadvantages: ['heavy-armor', 'direct-combat'],
    description: 'High evasion and mobility; can front-line by avoiding hits',
    leaderEffect: 'Evasion Up — improves party evasion'
  },
  hoplite: {
    name: 'Hoplite',
    type: 'Lance Defense',
    characters: 'Hodrick, Bryce, Hermann, Beaumont',
    advantages: ['cavalry-units', 'charge-defense'],
    disadvantages: ['magic-attacks', 'ranged-focus'],
    description: 'Excellent physical defense; spear formation counters cavalry',
    leaderEffect: 'Ranged Resistance — lowers ranged threat'
  },
  hunter: {
    name: 'Hunter',
    type: 'Precision Archer',
    characters: 'Rolf',
    advantages: ['flying-units', 'accurate-shots'],
    disadvantages: ['heavy-armor', 'close-combat'],
    description: 'High accuracy and strong versus flying enemies',
    leaderEffect: 'Ranged Support — boosts accuracy'
  },
  'elven-archer': {
    name: 'Elven Archer',
    type: 'Magical Ranged',
    characters: 'Lhinalagos, Galadmir, Ridiel',
    advantages: ['heavy-armor', 'magic-penetration'],
    disadvantages: ['anti-magic', 'cavalry-charge'],
    description: 'Ranged magic attacks that cleanse debuffs; ignores physical armor',
    leaderEffect: 'Ranged Support — magical shots'
  },
  'elven-fencer': {
    name: 'Elven Fencer',
    type: 'Close-Range Magic',
    characters: 'Ithilion, Railanor',
    advantages: ['magic-support', 'ally-protection'],
    disadvantages: ['anti-magic', 'ranged-focus'],
    description: 'Short-range magic with ally-protection utilities',
    leaderEffect: 'Magic Support — boosts magic effects'
  },

  // Advanced classes
  knight: {
    name: 'Knight',
    type: 'Heavy Cavalry',
    characters: 'Adel, Clive',
    advantages: ['balanced-combat', 'versatile'],
    disadvantages: ['gryphon-knights', 'magic-focus'],
    description: 'Balanced offense and defense; versatile in most situations',
    leaderEffect: 'Quick Rest — faster recovery'
  },
  crusader: {
    name: 'Crusader',
    type: 'Royal Warrior',
    characters: 'Virginia',
    advantages: ['flying-units', 'armored-units'],
    disadvantages: ['hoplite', 'elven-archer', 'magic-focus'],
    description: 'Noble warrior with anti-air and anti-armor tools',
    leaderEffect: 'Ranged Resistance — provides ranged protection'
  },
  gladiator: {
    name: 'Gladiator',
    type: 'Row-Cleave',
    characters: 'Bruno',
    advantages: ['dense-formations', 'multiple-targets'],
    disadvantages: ['single-target', 'ranged-kiting', 'elven-archer'],
    description: 'Physical skills that hit entire rows',
    leaderEffect: 'Barrier Breaker — reduces enemy defenses'
  },
  'dark-knight': {
    name: 'Dark Knight',
    type: 'Dark Warrior',
    characters: 'Gloucester',
    advantages: ['low-hp-power', 'risk-reward'],
    disadvantages: ['sustained-combat', 'early-game'],
    description: 'Skills scale at low HP; high risk–high reward',
    leaderEffect: 'Quick Rest — recover while under pressure'
  },
  'gryphon-knight': {
    name: 'Gryphon Knight',
    type: 'Flying Cavalry',
    characters: 'Fran',
    advantages: ['all-cavalry-types', 'terrain-ignore'],
    disadvantages: ['arbalist', 'hunter', 'elven-archer'],
    description: 'High evasion, ATK, and M. DEF; hard-counters ground cavalry',
    leaderEffect: 'Flight — aerial mobility advantage'
  },
  housecarl: {
    name: 'Housecarl',
    type: 'Elite Warrior',
    characters: 'Aubin',
    advantages: ['armor-breaking', 'high-defense'],
    disadvantages: ['magic-users', 'mobility'],
    description: 'High physical attack; reduces enemy physical defense',
    leaderEffect: 'Barrier Breaker — shreds armor'
  },
  'elven-augur': {
    name: 'Elven Augur',
    type: 'Elven Mage',
    characters: 'Rosalinde',
    advantages: ['magic-support', 'summoning'],
    disadvantages: ['physical-assault', 'anti-magic'],
    description: 'Healing/support skills and fairy summons',
    leaderEffect: 'Magic Support — amplifies magic'
  },
  'elven-sibyl': {
    name: 'Elven Sibyl',
    type: 'High Healer',
    characters: 'Eltolinde',
    advantages: ['healing-support', 'battlefield-control'],
    disadvantages: ['direct-combat', 'physical-focus'],
    description: 'Powerful healing/support and control via summons',
    leaderEffect: 'Healing Support — stronger healing'
  }
};

// Relationships (English)
const relationshipData = {
  'gryphon-knight': {
    hardCounters: ['knight', 'crusader'],
    strongAgainst: ['all-cavalry-types'],
    weakTo: ['arbalist', 'hunter', 'elven-archer'],
    damageMultiplier: 2.0
  },
  arbalist: {
    strongAgainst: ['gryphon-knight', 'flying-units'],
    weakTo: ['knight', 'heavy-armor', 'hoplite'],
    damageMultiplier: 2.0
  },
  hunter: {
    strongAgainst: ['gryphon-knight', 'flying-units'],
    weakTo: ['knight', 'heavy-armor', 'hoplite'],
    damageMultiplier: 2.0
  },
  hoplite: {
    strongAgainst: ['knight', 'cavalry-charge', 'crusader'],
    weakTo: ['elven-archer', 'magic-attacks', 'thief'],
    damageMultiplier: 2.0
  },
  'elven-archer': {
    strongAgainst: ['knight', 'hoplite', 'fighter', 'housecarl'],
    weakTo: ['thief', 'mobile-units', 'gryphon-knight'],
    damageMultiplier: 2.0
  },
  gladiator: {
    strongAgainst: ['dense-formations', 'multiple-targets'],
    weakTo: ['single-strong-units', 'ranged-kiting', 'elven-archer'],
    damageMultiplier: 1.5
  },
  thief: {
    strongAgainst: ['elven-archer', 'elven-augur', 'magic-users', 'elven-sibyl'],
    weakTo: ['fighter', 'knight', 'heavy-armor', 'hoplite'],
    damageMultiplier: 1.8
  },
  fighter: {
    strongAgainst: ['thief', 'light-infantry'],
    weakTo: ['elven-archer', 'magic-users', 'gryphon-knight'],
    damageMultiplier: 1.3
  },
  crusader: {
    strongAgainst: ['flying-units', 'armored-units'],
    weakTo: ['hoplite', 'elven-archer', 'magic-focus'],
    damageMultiplier: 1.7
  }
};

function getClassAdvantages(classKey) {
  const data = classData[classKey];
  const relations = relationshipData[classKey];
  if (!data || !relations) return [];
  let advantages = [];
  if (relations.hardCounters) {
    relations.hardCounters.forEach(target => {
      advantages.push({
        target,
        type: 'hard-counter',
        reason: getCounterReason(classKey, target, 'hard'),
        multiplier: relations.damageMultiplier || 2.0
      });
    });
  }
  if (relations.strongAgainst) {
    relations.strongAgainst.forEach(target => {
      advantages.push({
        target,
        type: 'strong-against',
        reason: getCounterReason(classKey, target, 'strong'),
        multiplier: relations.damageMultiplier || 1.5
      });
    });
  }
  return advantages;
}

function getClassWeaknesses(classKey) {
  const relations = relationshipData[classKey];
  if (!relations || !relations.weakTo) return [];
  return relations.weakTo.map(threat => ({
    threat,
    reason: getWeaknessReason(classKey, threat)
  }));
}

function getCounterReason(attacker, target, type) {
  const reasons = {
    'gryphon-knight-knight': 'Aerial advantage completely overwhelms ground cavalry; terrain ignore',
    'gryphon-knight-all-cavalry-types': 'Air superiority dominates all ground cavalry classes',
    'arbalist-gryphon-knight': 'Heavy bolts track and punish flying targets',
    'arbalist-flying-units': 'Purpose-built to counter flying enemies',
    'hunter-gryphon-knight': 'Precision shots threaten airborne targets',
    'hunter-flying-units': 'Tracking and accuracy counter flying units',
    'hoplite-knight': 'Spear formations blunt cavalry charges at reach',
    'hoplite-cavalry-charge': 'Classic anti-cavalry spear doctrine',
    'elven-archer-knight': 'Magic arrows ignore heavy armor',
    'elven-archer-hoplite': 'Magic bypasses physical defensive stats',
    'elven-archer-fighter': 'Magic damage excels vs heavy infantry',
    'gladiator-dense-formations': 'Row-cleaves excel vs clustered enemies',
    'gladiator-multiple-targets': 'AoE pressure in multi-target fights',
    'thief-elven-archer': 'High evasion closes the gap on casters',
    'thief-elven-augur': 'Mobility and evasion counter spellcasters',
    'thief-magic-users': 'Agility/stealth are classic anti-mage tools'
  };
  const key = `${attacker}-${target}`;
  return reasons[key] || `${classData[attacker]?.name || attacker} has a natural advantage vs ${target}`;
}

function getWeaknessReason(defender, threat) {
  const reasons = {
    'gryphon-knight-arbalist': 'Heavy bolts have high accuracy vs flying',
    'gryphon-knight-hunter': 'Precision archery specializes in anti-air',
    'gryphon-knight-elven-archer': 'Magic tracking harms airborne units',
    'knight-gryphon-knight': 'Ground cavalry cannot contest air superiority',
    'knight-elven-archer': 'Armor fails vs magic penetration',
    'hoplite-elven-archer': 'Formations lack anti-magic defenses',
    'hoplite-magic-attacks': 'Physical defense does not stop magic',
    'fighter-elven-archer': 'Heavy armor is weak to magic damage',
    'thief-fighter': 'Light armor loses straight-up to heavy infantry',
    'thief-knight': 'Mobility alone can’t stop heavy charges',
    'elven-archer-thief': 'Casters are vulnerable to fast melees'
  };
  const key = `${defender}-${threat}`;
  return reasons[key] || `Vulnerable to ${threat}`;
}

function renderRelationships(selectedClass) {
  const display = document.getElementById('relationshipDisplay');
  const data = classData[selectedClass];
  if (!data) {
    display.innerHTML = '<p>Select a class to view counters</p>';
    return;
  }
  let html = `
    <div class="selected-class-info">
      <h3>${data.name} (${data.type})</h3>
      <p><strong>Representative:</strong> ${data.characters}</p>
      <p>${data.description}</p>
      <div class="leader-effect-display">
        <strong>Leader Effect:</strong> ${data.leaderEffect}
      </div>
    </div>
  `;
  const advantages = getClassAdvantages(selectedClass);
  if (advantages.length > 0) {
    html += `
      <div class="advantage-list">
        <h4 style="color: #28a745; margin-bottom: 1rem;">
          <span style="margin-right: 0.5rem;">⚔️</span>Strong Against
        </h4>
    `;
    advantages.forEach(advantage => {
      const targetData = classData[advantage.target];
      const targetName = targetData ? targetData.name : advantage.target;
      const icon = targetData ? targetData.name[0] : advantage.target[0].toUpperCase();
      const typeClass = advantage.type === 'hard-counter' ? 'hard-counter' : 'strong-against';
      html += `
        <div class="advantage-item ${typeClass}">
          <div class="class-icon">${icon}</div>
          <div>
            <strong>${targetName}</strong>
            ${advantage.type === 'hard-counter' ? '<span class="counter-badge">Hard Counter</span>' : ''}
            <span class="damage-multiplier" style="background: #28a745; color: white; padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; font-weight: bold; margin-left: 0.5rem;">
              ×${advantage.multiplier}
            </span>
            <div style="font-size: 0.9rem; color: #666;">
              ${advantage.reason}
            </div>
          </div>
        </div>
      `;
    });
    html += '</div>';
  }
  const weaknesses = getClassWeaknesses(selectedClass);
  if (weaknesses.length > 0) {
    html += `
      <div class="disadvantage-list">
        <h4 style="color: #dc3545; margin-bottom: 1rem;">
          <span style="margin-right: 0.5rem;">🛡️</span>Weak To
        </h4>
    `;
    weaknesses.forEach(weakness => {
      const threatData = classData[weakness.threat];
      const threatName = threatData ? threatData.name : weakness.threat;
      const icon = threatData ? threatData.name[0] : weakness.threat[0].toUpperCase();
      html += `
        <div class="disadvantage-item">
          <div class="class-icon">${icon}</div>
          <div>
            <strong>${threatName}</strong>
            <div style="font-size: 0.9rem; color: #666;">
              ${weakness.reason}
            </div>
          </div>
        </div>
      `;
    });
    html += '</div>';
  }
  display.innerHTML = html;
}

function addClassCardInteractions() {
  const classCards = document.querySelectorAll('.class-card');
  const classSelect = document.getElementById('classSelect');
  classCards.forEach(card => {
    card.addEventListener('click', function () {
      const classKey = this.getAttribute('data-class');
      classSelect.value = classKey;
      renderRelationships(classKey);
      document.getElementById('visualization').scrollIntoView({ behavior: 'smooth' });
    });
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(-5px) scale(1)';
    });
  });
}

function addSmoothScrolling() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function addScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  const animatedElements = document.querySelectorAll('.class-card, .relationship-item, .strategy-tips');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const classSelect = document.getElementById('classSelect');
  classSelect.addEventListener('change', function () {
    renderRelationships(this.value);
  });
  addClassCardInteractions();
  addSmoothScrolling();
  addScrollAnimations();
  renderRelationships('');
  console.log('Unicorn Overlord Class Guide (EN) loaded');
});

