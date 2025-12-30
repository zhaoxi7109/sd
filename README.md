# 简单网页

这是一个简单的静态网页项目，包含一个HTML文件和内联CSS样式。

## 项目结构

- [simple_webpage.html](simple_webpage.html) - 主页面文件

## 自动部署

此项目配置了GitHub Actions自动部署功能，可以自动将网页部署到GitHub Pages。

### 配置GitHub Pages

1. 将此项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择"GitHub Actions"作为源

### 部署工作流

当您推送到main或master分支时，GitHub Actions将自动运行部署工作流，将您的网页部署到GitHub Pages。

工作流配置文件位于 [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## 本地查看

您可以直接在浏览器中打开 [simple_webpage.html](simple_webpage.html) 文件来查看网页效果。