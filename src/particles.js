/**
 * 粒子系统类
 */
export class ParticleSystem {
  constructor() {
    this.particles = [];
    this.container = null;
    this.isVisible = true;
    this.animationId = null;
  }

  /**
   * 初始化粒子系统
   */
  init() {
    this.createContainer();
    this.createParticles();
    this.animate();
  }

  /**
   * 创建粒子容器
   */
  createContainer() {
    this.container = document.createElement('div');
    this.container.id = 'particle-container';
    this.container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      overflow: hidden;
    `;
    document.body.appendChild(this.container);
  }

  /**
   * 创建粒子
   */
  createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // 随机大小
      const size = Math.random() * 20 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // 随机位置
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // 随机动画延迟
      const delay = Math.random() * 15;
      particle.style.animationDelay = `${delay}s`;
      
      // 随机颜色
      const colors = [
        'rgba(102, 126, 234, 0.1)',
        'rgba(118, 75, 162, 0.1)',
        'rgba(224, 195, 252, 0.1)',
        'rgba(142, 197, 252, 0.1)'
      ];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      this.container.appendChild(particle);
      this.particles.push(particle);
    }
  }

  /**
   * 开始动画
   */
  animate() {
    if (this.isVisible) {
      this.particles.forEach(particle => {
        // 重新开始动画
        particle.style.animation = 'none';
        // 重绘
        particle.offsetHeight;
        particle.style.animation = `float 15s infinite linear`;
      });
    }
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  /**
   * 切换粒子系统可见性
   */
  toggleVisibility() {
    this.isVisible = !this.isVisible;
    
    if (this.container) {
      this.container.style.display = this.isVisible ? 'block' : 'none';
    }
    
    // 更新按钮文本
    const particleButton = document.querySelector('[data-action="toggle-particles"]');
    if (particleButton) {
      particleButton.textContent = this.isVisible 
        ? '隐藏粒子效果' 
        : '显示粒子效果';
    }
  }
}