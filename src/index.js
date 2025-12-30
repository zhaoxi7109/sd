import './styles/main.scss';
import { initApp } from './app';

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// 导出一些工具函数，供测试使用
export { formatTime, debounce };

/**
 * 格式化时间
 * @param {Date} date - 要格式化的日期
 * @returns {string} 格式化后的时间字符串
 */
function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} wait - 等待时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}