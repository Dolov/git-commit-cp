# git-commit-cp

## 规范化流程化项目化提交 Git Commit Message

> 优雅规范的提交团队项目的 Git Commit Message 对于版本控制有着十分重要的作用,该 npm 模块可以定制项目的 Commit Message 的提交流程。

## ✨ 特性

- 一键生成配置信息。
- 可以根据团队及项目需要定制提交流程。
- 扩展性强，使用简单。

## 📦 安装

采用全局安装或者局部安装均可

```bash
yarn global add git-commit-cp
```

## 🔨 使用

全局安装使用

```jsx
git commit-cp
```

局部安装使用

```jsx
npx git commit-cp

yarn git commit-cp
```

## ⌨️ 自定义提交流程

```jsx
git cp-init
```

该命令将在当前目录下生成 commit.config.js 文件, 可根据团队及项目需要自行配置。
