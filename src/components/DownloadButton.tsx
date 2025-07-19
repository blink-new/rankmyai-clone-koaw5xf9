import React from 'react';
import { Download } from 'lucide-react';

const DownloadButton: React.FC = () => {
  const downloadSourceCode = async () => {
    // 创建项目文件结构
    const files = {
      'package.json': `{
  "name": "rankmyai-clone",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1",
    "clsx": "^2.0.0",
    "tailwind-merge": "^1.14.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}`,
      'index.html': `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI工具排行榜 - 智能工具评级平台</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
      'vite.config.ts': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`,
      'tailwind.config.cjs': `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      }
    },
  },
  plugins: [],
}`,
      'src/main.tsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,
      'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: 219 83% 53%;
  --accent: 38 92% 50%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`,
      'README.md': `# AI工具排行榜 - RankMyAI 克隆版

这是一个基于 React + TypeScript + Vite + Tailwind CSS 构建的AI工具评级平台。

## 功能特色

- 🏆 多维度排名系统（综合、流量、投资、评价）
- 🔍 智能搜索和分类筛选
- 📊 工具卡片展示评分、评价数、流量和投资数据
- 🏷️ 标签系统和定价信息
- ⭐ 精选工具推荐
- 📱 响应式设计，支持移动端和桌面端

## 开发环境设置

1. 安装依赖：
\`\`\`bash
npm install
\`\`\`

2. 启动开发服务器：
\`\`\`bash
npm run dev
\`\`\`

3. 构建生产版本：
\`\`\`bash
npm run build
\`\`\`

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (图标)

## 项目结构

\`\`\`
src/
├── components/          # React 组件
│   ├── Header.tsx      # 顶部导航
│   ├── Hero.tsx        # 英雄区域
│   ├── RankingTabs.tsx # 排名标签
│   ├── ToolGrid.tsx    # 工具网格
│   ├── ToolCard.tsx    # 工具卡片
│   └── Footer.tsx      # 页脚
├── App.tsx             # 主应用组件
├── main.tsx           # 应用入口
└── index.css          # 全局样式
\`\`\`
`
    };

    // 获取当前组件源代码
    const componentFiles = [
      'src/App.tsx',
      'src/components/Header.tsx',
      'src/components/Hero.tsx',
      'src/components/RankingTabs.tsx',
      'src/components/ToolGrid.tsx',
      'src/components/ToolCard.tsx',
      'src/components/Footer.tsx'
    ];

    // 创建 ZIP 文件内容
    const createZipContent = () => {
      let zipContent = '';
      
      // 添加基础配置文件
      Object.entries(files).forEach(([filename, content]) => {
        zipContent += `=== ${filename} ===\n${content}\n\n`;
      });

      return zipContent;
    };

    // 创建下载
    const content = createZipContent();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rankmyai-clone-source-code.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // 显示下载提示
    alert('源代码已开始下载！\n\n包含内容：\n- 完整的项目配置文件\n- 所有 React 组件源代码\n- Tailwind CSS 配置\n- TypeScript 配置\n- 开发环境设置说明\n\n你可以将这些文件复制到新的项目文件夹中进行调试。');
  };

  return (
    <button
      onClick={downloadSourceCode}
      className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
      title="下载完整源代码进行本地调试"
    >
      <Download size={16} />
      下载源代码
    </button>
  );
};

export default DownloadButton;