// 基于真实游戏数据的职业信息
const classData = {
    // 基础职业
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

    // 高级职业
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
};

// 克制关系数据（增强版）
const relationshipData = {
    // 最重要的克制关系 - 狮鹫骑士vs骑兵（双倍伤害）
    'gryphon-knight': {
        hardCounters: ['knight', 'crusader'], // 完全克制
        strongAgainst: ['all-cavalry-types'],
        weakTo: ['arbalist', 'hunter', 'elven-archer'],
        damageMultiplier: 2.0
    },
    
    // 对飞行单位有效的职业（双倍伤害）
    'arbalist': {
        strongAgainst: ['gryphon-knight', 'flying-units'],
        weakTo: ['knight', 'heavy-armor', 'hoplite'],
        damageMultiplier: 2.0
    },
    'hunter': {
        strongAgainst: ['gryphon-knight', 'flying-units'],
        weakTo: ['knight', 'heavy-armor', 'hoplite'],
        damageMultiplier: 2.0
    },
    
    // 长枪兵克制骑兵（双倍伤害）
    'hoplite': {
        strongAgainst: ['knight', 'cavalry-charge', 'crusader'],
        weakTo: ['elven-archer', 'magic-attacks', 'thief'],
        damageMultiplier: 2.0
    },
    
    // 魔法攻击无视物理防御（双倍伤害）
    'elven-archer': {
        strongAgainst: ['knight', 'hoplite', 'fighter', 'housecarl'],
        weakTo: ['thief', 'mobile-units', 'gryphon-knight'],
        damageMultiplier: 2.0
    },
    
    // 角斗士对密集阵型有效
    'gladiator': {
        strongAgainst: ['dense-formations', 'multiple-targets'],
        weakTo: ['single-strong-units', 'ranged-kiting', 'elven-archer'],
        damageMultiplier: 1.5
    },
    
    // 盗贼适合对抗法师
    'thief': {
        strongAgainst: ['elven-archer', 'elven-augur', 'magic-users', 'elven-sibyl'],
        weakTo: ['fighter', 'knight', 'heavy-armor', 'hoplite'],
        damageMultiplier: 1.8
    },
    
    // 战士基础克制
    'fighter': {
        strongAgainst: ['thief', 'light-infantry'],
        weakTo: ['elven-archer', 'magic-users', 'gryphon-knight'],
        damageMultiplier: 1.3
    },
    
    // 十字军克制关系
    'crusader': {
        strongAgainst: ['flying-units', 'armored-units'],
        weakTo: ['hoplite', 'elven-archer', 'magic-focus'],
        damageMultiplier: 1.7
    }
};

// 获取职业优势
function getClassAdvantages(classKey) {
    const data = classData[classKey];
    const relations = relationshipData[classKey];
    
    if (!data || !relations) return [];
    
    let advantages = [];
    
    // 硬克制（完全压制）
    if (relations.hardCounters) {
        relations.hardCounters.forEach(target => {
            advantages.push({
                target: target,
                type: 'hard-counter',
                reason: getCounterReason(classKey, target, 'hard'),
                multiplier: relations.damageMultiplier || 2.0
            });
        });
    }
    
    // 强势对抗
    if (relations.strongAgainst) {
        relations.strongAgainst.forEach(target => {
            advantages.push({
                target: target,
                type: 'strong-against',
                reason: getCounterReason(classKey, target, 'strong'),
                multiplier: relations.damageMultiplier || 1.5
            });
        });
    }
    
    return advantages;
}

// 获取职业劣势
function getClassWeaknesses(classKey) {
    const relations = relationshipData[classKey];
    if (!relations || !relations.weakTo) return [];
    
    return relations.weakTo.map(threat => ({
        threat: threat,
        reason: getWeaknessReason(classKey, threat)
    }));
}

// 获取克制原因
function getCounterReason(attacker, target, type) {
    const reasons = {
        'gryphon-knight-knight': '飞行优势完全压制地面骑兵，地形无视，高机动性',
        'gryphon-knight-all-cavalry-types': '空中优势对所有地面骑兵类型都有压倒性优势',
        'arbalist-gryphon-knight': '重型弩箭对飞行目标特别有效，高命中率',
        'arbalist-flying-units': '专门设计用于对付飞行敌人的重型武器',
        'hunter-gryphon-knight': '精准射击技能对飞行目标造成致命威胁',
        'hunter-flying-units': '猎人的追踪和射击技能克制飞行生物',
        'hoplite-knight': '长枪阵型完美克制骑兵冲锋，距离优势',
        'hoplite-cavalry-charge': '长枪兵的传统战术就是对抗骑兵冲击',
        'elven-archer-knight': '魔法箭矢无视重甲防御，穿透力强',
        'elven-archer-hoplite': '魔法攻击绕过物理防御系统',
        'elven-archer-fighter': '魔法伤害对重甲步兵特别有效',
        'gladiator-dense-formations': '横扫攻击对密集排列的敌人极其有效',
        'gladiator-multiple-targets': '群体攻击技能在多目标战斗中发挥优势',
        'thief-elven-archer': '高回避率躲避魔法攻击，快速接近',
        'thief-elven-augur': '机动性和回避能力克制施法者',
        'thief-magic-users': '敏捷和隐蔽能力对抗魔法职业的经典战术'
    };
    
    const key = `${attacker}-${target}`;
    return reasons[key] || `${classData[attacker]?.name || attacker}的职业特性对${target}有天然优势`;
}

// 获取弱势原因
function getWeaknessReason(defender, threat) {
    const reasons = {
        'gryphon-knight-arbalist': '重型弩箭的高命中率威胁飞行单位',
        'gryphon-knight-hunter': '精准射击专门克制飞行目标',
        'gryphon-knight-elven-archer': '魔法箭矢的追踪能力威胁空中单位',
        'knight-gryphon-knight': '地面骑兵无法对抗空中优势',
        'knight-elven-archer': '重甲无法防御魔法穿透攻击',
        'hoplite-elven-archer': '长枪阵型缺乏对魔法攻击的防护',
        'hoplite-magic-attacks': '物理防御无法抵御魔法伤害',
        'fighter-elven-archer': '重甲防御对魔法攻击无效',
        'thief-fighter': '轻甲无法承受重装步兵的正面攻击',
        'thief-knight': '机动优势不足以对抗重装骑兵的冲击',
        'elven-archer-thief': '施法者容易被高机动性敌人接近威胁'
    };
    
    const key = `${defender}-${threat}`;
    return reasons[key] || `容易被${threat}克制`;
}

// 渲染关系显示
function renderRelationships(selectedClass) {
    const display = document.getElementById('relationshipDisplay');
    const data = classData[selectedClass];
    
    if (!data) {
        display.innerHTML = '<p>选择一个职业来查看其克制关系</p>';
        return;
    }
    
    let html = `
        <div class="selected-class-info">
            <h3>${data.name} (${data.type})</h3>
            <p><strong>代表角色：</strong>${data.characters}</p>
            <p>${data.description}</p>
            <div class="leader-effect-display">
                <strong>队长效果：</strong>${data.leaderEffect}
            </div>
        </div>
    `;
    
    // 获取优势关系
    const advantages = getClassAdvantages(selectedClass);
    if (advantages.length > 0) {
        html += `
            <div class="advantage-list">
                <h4 style="color: #28a745; margin-bottom: 1rem;">
                    <span style="margin-right: 0.5rem;">⚔️</span>有效对抗
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
                        ${advantage.type === 'hard-counter' ? '<span class="counter-badge">完全克制</span>' : ''}
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
    
    // 获取劣势关系
    const weaknesses = getClassWeaknesses(selectedClass);
    if (weaknesses.length > 0) {
        html += `
            <div class="disadvantage-list">
                <h4 style="color: #dc3545; margin-bottom: 1rem;">
                    <span style="margin-right: 0.5rem;">🛡️</span>易被克制
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

// 添加职业卡片点击效果
function addClassCardInteractions() {
    const classCards = document.querySelectorAll('.class-card');
    const classSelect = document.getElementById('classSelect');
    
    classCards.forEach(card => {
        card.addEventListener('click', function() {
            const classKey = this.getAttribute('data-class');
            classSelect.value = classKey;
            renderRelationships(classKey);
            
            // 滚动到可视化区域
            document.getElementById('visualization').scrollIntoView({
                behavior: 'smooth'
            });
        });
        
        // 添加悬停效果
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
    });
}

// 平滑滚动效果
function addSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 添加滚动动画效果
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const animatedElements = document.querySelectorAll('.class-card, .relationship-item, .strategy-tips');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    const classSelect = document.getElementById('classSelect');
    
    // 监听选择器变化
    classSelect.addEventListener('change', function() {
        renderRelationships(this.value);
    });
    
    // 添加交互效果
    addClassCardInteractions();
    addSmoothScrolling();
    addScrollAnimations();
    
    // 初始化显示
    renderRelationships('');
    
    console.log('Unicorn Overlord 职业系统指南已加载完成！');
    console.log('数据基于真实游戏信息更新');
});