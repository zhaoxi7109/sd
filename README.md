# 简单网页项目

这是一个简单的静态网页项目，包含一个HTML文件和内联CSS样式。

## 项目结构

- [simple_webpage.html](simple_webpage.html) - 主页面文件
- [docs/index.html](docs/index.html) - 部署到GitHub Pages的页面文件
- [docs/CNAME](docs/CNAME) - 自定义域名配置文件
- [.github/workflows](.github/workflows) - GitHub Actions工作流配置

## 自动部署

此项目配置了GitHub Actions自动部署功能，可以自动将网页部署到GitHub Pages。

### 配置GitHub Pages

1. 将此项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择"GitHub Actions"作为源

## 多工作流协同

本项目展示了多种GitHub Actions工作流的协同工作：

### 1. 部署工作流 ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
- 监听main分支的推送事件
- 自动部署到GitHub Pages
- 使用最新的GitHub Pages Actions

### 2. HTML验证工作流 ([.github/workflows/html-validation.yml](.github/workflows/html-validation.yml))
- 使用W3C HTML验证器验证HTML文件的语法正确性
- 确保符合W3C标准
- 在代码推送和PR时运行

### 3. 链接检查工作流 ([.github/workflows/link-check.yml](.github/workflows/link-check.yml))
- 检查网页中所有链接的有效性
- 确保没有死链
- 在推送时运行，每月定时检查

### 4. 代码质量工作流 ([.github/workflows/code-quality.yml](.github/workflows/code-quality.yml))
- 检查代码风格和潜在问题
- 确保代码质量
- 在推送和PR时运行

## 工作流协同场景

当您推送代码到main分支时，会发生以下情况：

1. **所有工作流同时触发**：
   - 部署工作流开始准备部署
   - HTML验证工作流验证代码
   - 链接检查工作流检查链接
   - 代码质量工作流检查代码

2. **并行执行**：
   - 所有工作流在不同的虚拟环境中并行运行
   - 不会相互阻塞
   - 提高了整体效率

3. **结果反馈**：
   - 每个工作流独立报告结果
   - 如果任何工作流失败，可以在GitHub UI中查看详细信息

## 本地查看

您可以直接在浏览器中打开 [simple_webpage.html](simple_webpage.html) 文件来查看网页效果。

## 自定义域名

项目已配置自定义域名 [liqi8848.online](docs/CNAME)，通过CNAME文件进行配置。

## 部署到GitHub Pages

1. 推送代码到main分支
2. 等待GitHub Actions工作流完成
3. 访问 `https://liqi8848.online` 或 `https://<username>.github.io/<repository-name>` 查看网站