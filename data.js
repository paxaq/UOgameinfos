// Shared class and relationship data for zh and en
const DATA = {
  zh: {
    classData: {
      fighter: {
        name: '战士',
        type: '重装步兵',
        characters: 'Lex, Colm',
        advantages: ['archer-units', 'light-infantry'],
        disadvantages: ['magic-users', 'anti-armor'],
        description: '拥有优秀的物理防御力，能够保护队友的重装步兵',
        leaderEffect: '抗远程辅助 - 减少远程攻击伤害'
      },
      arbalist: {
        name: '弩手',
        type: '重型弓弩',
        characters: 'Liza',
        advantages: ['flying-units', 'medium-armor'],
        disadvantages: ['heavy-armor', 'cavalry-charge'],
        description: '拥有出色的命中率和物理攻击力，对飞行单位特别有效',
        leaderEffect: '远程辅助 - 提升远程攻击效果'
      },
      cleric: {
        name: '牧师',
        type: '治疗支援',
        characters: 'Sharon, Tatiana, Primm',
        advantages: ['undead-units', 'status-support'],
        disadvantages: ['physical-assault', 'archer-focus'],
        description: '为队友提供恢复和治疗魔法支援',
        leaderEffect: '治疗辅助 - 战斗中提供持续治疗'
      },
      thief: {
        name: '盗贼',
        type: '敏捷回避',
        characters: '多种角色可转职',
        advantages: ['magic-users', 'evasion-tactics'],
        disadvantages: ['heavy-armor', 'direct-combat'],
        description: '高回避率和机动性，适合担任前排肉盾',
        leaderEffect: '回避提升 - 增强队伍回避能力'
      },
      hoplite: {
        name: '重装步兵',
        type: '长枪防御',
        characters: 'Hodrick, Bryce, Hermann, Beaumont',
        advantages: ['cavalry-units', 'charge-defense'],
        disadvantages: ['magic-attacks', 'ranged-focus'],
        description: '拥有优秀的物理防御力，具备保护队友的能力，长枪克制骑兵',
        leaderEffect: '抗远程辅助 - 降低远程攻击威胁'
      },
      hunter: {
        name: '猎人',
        type: '精准射击',
        characters: 'Rolf',
        advantages: ['flying-units', 'accurate-shots'],
        disadvantages: ['heavy-armor', 'close-combat'],
        description: '拥有出色的命中率，对飞行敌人特别有效',
        leaderEffect: '远程辅助 - 提升射击精度'
      },
      'elven-archer': {
        name: '精灵弓手',
        type: '魔法射击',
        characters: 'Lhinalagos, Galadmir, Ridiel',
        advantages: ['heavy-armor', 'magic-penetration'],
        disadvantages: ['anti-magic', 'cavalry-charge'],
        description: '拥有远程魔法攻击，能够移除队友负面状态，魔法攻击无视物理防御',
        leaderEffect: '远程辅助 - 魔法射击支援'
      },
      'elven-fencer': {
        name: '精灵剑士',
        type: '近战魔法',
        characters: 'Ithilion, Railanor',
        advantages: ['magic-support', 'ally-protection'],
        disadvantages: ['anti-magic', 'ranged-focus'],
        description: '拥有短距离魔法攻击，能够保护队友',
        leaderEffect: '魔法辅助 - 提升魔法效果'
      },
      knight: {
        name: '骑士',
        type: '重装骑兵',
        characters: 'Adel, Clive',
        advantages: ['balanced-combat', 'versatile'],
        disadvantages: ['gryphon-knights', 'magic-focus'],
        description: '攻防兼备，在进攻和防守方面都表现优秀的全能型单位',
        leaderEffect: '快速休息 - 加快队伍恢复速度'
      },
      crusader: {
        name: '十字军',
        type: '皇家战士',
        characters: 'Virginia',
        advantages: ['flying-units', 'armored-units'],
        disadvantages: ['magic-focus', 'mobility'],
        description: '高贵的战士，能使用反飞行和反装甲技能',
        leaderEffect: '抗远程辅助 - 提供远程防护'
      },
      gladiator: {
        name: '角斗士',
        type: '群攻战士',
        characters: 'Bruno',
        advantages: ['dense-formations', 'row-attacks'],
        disadvantages: ['single-target', 'ranged-kiting'],
        description: '拥有能够攻击整行敌人的物理攻击技能',
        leaderEffect: '屏障破坏者 - 削弱敌方防御'
      },
      'dark-knight': {
        name: '黑骑士',
        type: '暗黑战士',
        characters: 'Gloucester',
        advantages: ['low-hp-power', 'risk-reward'],
        disadvantages: ['sustained-combat', 'early-game'],
        description: '拥有在低生命值时威力更强的技能，高风险高回报',
        leaderEffect: '快速休息 - 危险中的快速恢复'
      },
      'gryphon-knight': {
        name: '狮鹫骑士',
        type: '飞行骑兵',
        characters: 'Fran',
        advantages: ['all-cavalry', 'terrain-ignore'],
        disadvantages: ['anti-air', 'archer-focus'],
        description: '拥有高回避率、攻击力和魔法防御力，完全克制地面骑兵',
        leaderEffect: '飞行 - 提供空中机动优势'
      },
      housecarl: {
        name: '禁卫军',
        type: '精英战士',
        characters: 'Aubin',
        advantages: ['armor-breaking', 'high-defense'],
        disadvantages: ['magic-users', 'mobility'],
        description: '拥有出色的物理攻击力，能降低敌人物理防御',
        leaderEffect: '屏障破坏者 - 削弱敌方护甲'
      },
      'elven-augur': {
        name: '精灵占卜师',
        type: '精灵法师',
        characters: 'Rosalinde',
        advantages: ['magic-support', 'summoning'],
        disadvantages: ['physical-assault', 'anti-magic'],
        description: '擅长治疗和支援技能，能召唤妖精助战',
        leaderEffect: '魔法辅助 - 增强魔法效果'
      },
      'elven-sibyl': {
        name: '精灵女巫',
        type: '高阶治疗',
        characters: 'Eltolinde',
        advantages: ['healing-support', 'battlefield-control'],
        disadvantages: ['direct-combat', 'physical-focus'],
        description: '擅长治疗和支援技能，能召唤妖精助战，提供强大的战场控制',
        leaderEffect: '治疗辅助 - 强化治疗能力'
      }
    },
    relationshipData: {
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
    }
  },
  en: {
    classData: {
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
    },
    relationshipData: {
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
    }
  }
};

