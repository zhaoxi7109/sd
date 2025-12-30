# 复杂前端项目

这是一个使用现代前端技术栈构建的复杂项目示例。它使用Webpack进行模块打包，包含ES6模块、SCSS样式预处理、以及现代化的JavaScript功能。

## 项目结构

```
sd/
├── src/
│   ├── index.js          # 应用入口文件
│   ├── app.js            # 应用主模块
│   ├── particles.js      # 粒子系统模块
│   ├── styles/
│   │   └── main.scss     # 主样式文件
│   └── index.html        # HTML模板
├── .github/workflows/    # GitHub Actions工作流
│   ├── deploy.yml        # 部署到GitHub Pages
│   ├── html-validation.yml # HTML验证
│   ├── link-check.yml    # 链接检查
│   └── code-quality.yml  # 代码质量检查
├── docs/                 # GitHub Pages配置文件
│   └── CNAME             # 自定义域名配置
├── webpack.config.js     # Webpack配置文件
├── .eslintrc.js          # ESLint配置文件
├── package.json          # 项目依赖和脚本
└── README.md             # 项目说明
```

## 技术栈

- **构建工具**: Webpack 5
- **样式预处理**: SCSS
- **JavaScript**: ES6+ 模块化
- **代码检查**: ESLint
- **包管理**: npm
- **自动化部署**: GitHub Actions

## 功能特性

### 1. 模块化架构
- 使用ES6模块系统组织代码
- 清晰的模块分离和依赖管理

### 2. 现代CSS
- SCSS预处理器，支持变量、嵌套、混合等
- 响应式设计，适配各种屏幕尺寸

### 3. 交互功能
- 动态粒子效果
- 主题切换功能
- 滚动动画效果
- 实时时钟显示

### 4. 自动化构建
- 开发服务器热重载
- 生产环境代码优化
- 资源压缩和缓存

## 开发脚本

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 运行测试
npm test

# 代码格式化
npm run format

# 代码检查
npm run lint
```

## 自动部署

此项目配置了GitHub Actions自动部署功能，可以自动将构建后的网页部署到GitHub Pages。

### 配置GitHub Pages

1. 将此项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择"GitHub Actions"作为源

## 多工作流协同

本项目展示了多种GitHub Actions工作流的协同工作：

### 1. 部署工作流 ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
- 监听main分支的推送事件
- 自动构建并部署到GitHub Pages
- 使用最新的GitHub Pages Actions

### 2. HTML验证工作流 ([.github/workflows/html-validation.yml](.github/workflows/html-validation.yml))
- 构建项目后验证HTML文件的语法正确性
- 确保符合W3C标准
- 在代码推送和PR时运行

### 3. 链接检查工作流 ([.github/workflows/link-check.yml](.github/workflows/link-check.yml))
- 构建项目后检查所有链接的有效性
- 确保没有死链
- 在推送时运行，每月定时检查

### 4. 代码质量工作流 ([.github/workflows/code-quality.yml](.github/workflows/code-quality.yml))
- 检查源代码质量和潜在问题
- 运行ESLint验证JavaScript代码
- 检查SCSS样式文件
- 在推送和PR时运行

## 工作流协同场景

当您推送代码到main分支时，会发生以下情况：

1. **所有工作流同时触发**：
   - 部署工作流开始构建和部署
   - HTML验证工作流验证构建后的代码
   - 链接检查工作流检查构建后的链接
   - 代码质量工作流检查源代码

2. **并行执行**：
   - 部署工作流会首先构建项目
   - 其他验证工作流并行运行
   - 提高了整体效率

3. **结果反馈**：
   - 每个工作流独立报告结果
   - 如果任何工作流失败，可以在GitHub UI中查看详细信息

## 部署到GitHub Pages

1. 推送代码到main分支
2. 等待GitHub Actions工作流完成构建和部署
3. 访问 `https://liqi8848.online` 或 `https://<username>.github.io/<repository-name>` 查看网站

## 自定义域名

项目已配置自定义域名 `liqi8848.online`，通过 [docs/CNAME](docs/CNAME) 文件进行配置。