import { ParticleSystem } from './particles';

/**
 * 初始化应用
 */
export function initApp() {
  console.log('应用已启动');
  
  // 初始化粒子系统
  const particleSystem = new ParticleSystem();
  particleSystem.init();
  
  // 添加时钟功能
  updateClock();
  setInterval(updateClock, 1000);
  
  // 添加滚动动画
  setupScrollAnimations();
  
  // 添加交互效果
  setupInteractiveElements();
}

/**
 * 更新时钟
 */
function updateClock() {
  const clockElement = document.getElementById('clock');
  if (clockElement) {
    clockElement.textContent = new Date().toLocaleTimeString();
  }
}

/**
 * 设置滚动动画
 */
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // 观察所有带有animate-on-scroll类的元素
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/**
 * 设置交互元素
 */
function setupInteractiveElements() {
  // 添加按钮点击效果
  document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 添加点击动画
      this.classList.add('clicked');
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);
      
      // 根据按钮的data-action属性执行相应操作
      const action = this.getAttribute('data-action');
      if (action) {
        handleAction(action);
      }
    });
  });
}

/**
 * 处理按钮动作
 * @param {string} action - 动作类型
 */
function handleAction(action) {
  switch(action) {
    case 'toggle-particles':
      const ps = new ParticleSystem();
      ps.toggleVisibility();
      break;
    case 'change-theme':
      toggleTheme();
      break;
    default:
      console.log(`未处理的动作: ${action}`);
  }
}

/**
 * 切换主题
 */
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  
  // 更新按钮文本
  const themeButton = document.querySelector('[data-action="change-theme"]');
  if (themeButton) {
    themeButton.textContent = document.body.classList.contains('dark-theme') 
      ? '切换到亮色主题' 
      : '切换到暗色主题';
  }
}