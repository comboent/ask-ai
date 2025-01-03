# 🧠✨ AI 问答系统

> 你只管输入，剩下的交给 AI！ 🚀

## 🎯 功能介绍

这个项目是一个具有赛博朋克风格的 AI 问答系统，它允许你通过文本输入，并利用 OpenRouter.ai 提供的强大 AI 模型进行问答。主要特点包括：

*   **🤖 多模型支持:** 动态获取 OpenRouter.ai 支持的模型列表，并在页面上提供选择，让你体验不同的 AI 模型。
*   **🔍 搜索过滤:**  使用搜索框快速过滤模型列表，方便你选择需要的模型。
*  **💫 流畅体验:**  通过 CSS 动画和 JS 动态背景，提供具有科技感的视觉体验。
*   **⌨️ 输入即所得:**  你只需输入问题，剩下的复杂操作都交给 AI 处理，即时获得答案。
*   **📜 结果展示:**  支持多行长文本结果显示，并带有滚动条，不会破坏页面布局。
*   **💎 赛博朋克风格:**  使用霓虹灯、深色背景，以及自定义滚动条等元素，营造酷炫的赛博朋克风格。

## 🛠️ 技术栈

*   **前端:** HTML, CSS (Tailwind CSS), JavaScript
*   **后端:** Node.js, Express.js
*   **API:** OpenRouter.ai

## 🚀 运行项目

### 步骤 1: 克隆仓库

```bash
git clone [https://github.com/your-github-username/your-repository-name.git](https://github.com/comboent/ask-ai.git)
cd ask-ai
```

### 步骤 2: 安装依赖

在你的项目根目录中，运行以下命令安装必要的依赖：

```bash
npm install
```

### 步骤 3: 配置 OpenRouter API Key

1.  在项目根目录下创建 `.env` 文件。
2.  在 `.env` 文件中添加你的 OpenRouter API Key，并指定模型（可选）：

```env
OPENROUTER_API_KEY=sk-...  # 替换为你的 API Key
# OPENROUTER_MODEL=openai/gpt-4  # 可选，指定默认模型
# PROXY_URL=http://your_proxy_ip:your_proxy_port #可选, 添加代理地址
```

### 步骤 4: 运行后端服务

```bash
node index.js
```

### 步骤 5: 运行前端服务

打开你的浏览器，访问 `http://localhost:3000/index.html`。

### 步骤 6: 构建 CSS (可选)

如果你修改了前端 css 代码， 需要使用以下命令重新构建 css:

```bash
npm run dev
```

## 💡 使用方法

1.  **打开页面:** 在浏览器中打开 `http://localhost:3000/index.html`。
2.  **选择模型:** 在右侧模型选择列表中，选择你想要使用的 AI 模型。
3.  **输入问题:** 在输入框中输入你的问题。
4.  **提交问题:**  点击“提问”按钮，AI 将会分析你的问题并给出答案。

## ⚙️ 自定义配置 (可选)

*   **模型选择:** 在 `.env` 文件中修改 `OPENROUTER_MODEL` 的值，可以设置默认的模型。
*   **代理配置:** 在 `.env` 文件中修改 `PROXY_URL` 的值，可以设置代理服务器地址。
*   **样式定制:** 你可以通过修改 `public/style.css` 或 `public/index.html` 中的 CSS 类名来调整页面的样式。
*   **动态背景:** 你可以在 `public/index.html` 中的 `<script>` 标签中，修改 `canvas` 的相关代码，自定义动态背景。

## ❗ 注意事项

*   你需要注册 OpenRouter.ai 账号并获取 API Key 才能正常使用此项目。
*   请确保你的本地 Node.js 环境已经正确安装。
*  如果你在本地使用代理，请确保代理服务器正常工作。

## 🎉 贡献

如果你有任何改进意见或想要贡献代码，欢迎提交 Pull Request。

## 📜 许可证

MIT License

---
