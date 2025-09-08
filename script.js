// 使用共享数据源
const classData = DATA.zh.classData;
const relationshipData = DATA.zh.relationshipData;

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
