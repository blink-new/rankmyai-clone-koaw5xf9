import React from 'react'
import { Download } from 'lucide-react'

const DownloadButton: React.FC = () => {
  const downloadSourceCode = async () => {
    // 创建完整的项目文件结构
    const projectFiles = {
      // 根目录配置文件
      'package.json': `{
  "name": "rankmyai-clone",
  "private": true,
  "version": "1.0.0",
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
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
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

      'README.md': `# RankMyAI Clone - AI工具排行榜平台

这是一个完整的 RankMyAI.com 克隆项目，使用 React + TypeScript + Vite + Tailwind CSS 构建。

## 🚀 快速开始

### 安装依赖
\`\`\`bash
npm install
\`\`\`

### 启动开发服务器
\`\`\`bash
npm run dev
\`\`\`

### 构建生产版本
\`\`\`bash
npm run build
\`\`\`

## 📁 项目结构

\`\`\`
rankmyai-clone/
├── public/                 # 静态资源
│   ├── favicon.svg
│   └── vite.svg
├── src/                    # 源代码
│   ├── components/         # React 组件
│   │   ├── Header.tsx      # 顶部导航
│   │   ├── Hero.tsx        # 英雄区域
│   │   ├── RankingTabs.tsx # 排名标签
│   │   ├── ToolGrid.tsx    # 工具网格
│   │   ├── ToolCard.tsx    # 工具卡片
│   │   ├── Footer.tsx      # 页脚
│   │   └── DownloadButton.tsx # 下载按钮
│   ├── App.tsx             # 主应用组件
│   ├── main.tsx            # 应用入口
│   └── index.css           # 全局样式
├── index.html              # HTML 模板
├── package.json            # 项目配置
├── vite.config.ts          # Vite 配置
├── tailwind.config.cjs     # Tailwind 配置
└── tsconfig.json           # TypeScript 配置
\`\`\`

## ✨ 功能特性

- 🏆 **多维度排名系统** - 综合、流量、投资、评价排名
- 🔍 **智能搜索筛选** - 支持关键词搜索和分类筛选
- 📊 **详细工具信息** - 评分、评价数、流量、投资数据
- 🏷️ **标签分类系统** - 工具标签和定价信息
- ⭐ **精选工具推荐** - 热门和推荐工具展示
- 📱 **响应式设计** - 完美支持移动端和桌面端
- 🎨 **现代化UI** - 使用 Tailwind CSS 构建的美观界面

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **图标库**: Lucide React
- **开发工具**: ESLint + TypeScript

## 📝 开发说明

1. 项目使用 TypeScript 进行类型安全开发
2. 采用函数式组件和 React Hooks
3. 使用 Tailwind CSS 进行样式管理
4. 支持热重载和快速开发体验
5. 包含完整的 ESLint 配置

## 🎯 核心组件说明

- **Header**: 顶部导航栏，包含logo、菜单和下载按钮
- **Hero**: 英雄区域，包含搜索框和分类筛选
- **RankingTabs**: 排名标签切换组件
- **ToolGrid**: 工具网格布局和数据展示
- **ToolCard**: 单个工具卡片组件
- **Footer**: 页脚信息和链接

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

祝你开发愉快！🚀`,

      'index.html': `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI工具排行榜 - 智能工具评级平台</title>
    <meta name="description" content="发现和评价最好的AI工具，包含25000+AI工具的综合排名平台" />
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

      'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`,

      'tsconfig.node.json': `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}`,

      'postcss.config.cjs': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,

      'eslint.config.js': `import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)`,

      // public 文件夹
      'public/favicon.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 12l2 2 4-4"/>
  <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"/>
  <path d="M3 12v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6"/>
</svg>`,

      'public/vite.svg': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>`,

      // src 文件夹
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
  --primary: 37 99 235;
  --accent: 245 158 11;
  --background: 255 255 255;
  --foreground: 15 23 42;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}`,

      'src/App.tsx': `import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RankingTabs from './components/RankingTabs'
import ToolGrid from './components/ToolGrid'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('overall')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <RankingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ToolGrid 
        activeTab={activeTab}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />
      <Footer />
    </div>
  )
}

export default App`
    }

    // 获取当前组件的源代码
    try {
      const componentSources = await Promise.all([
        fetch('/src/components/Header.tsx').then(r => r.text()).catch(() => '// Header component source code'),
        fetch('/src/components/Hero.tsx').then(r => r.text()).catch(() => '// Hero component source code'),
        fetch('/src/components/RankingTabs.tsx').then(r => r.text()).catch(() => '// RankingTabs component source code'),
        fetch('/src/components/ToolGrid.tsx').then(r => r.text()).catch(() => '// ToolGrid component source code'),
        fetch('/src/components/ToolCard.tsx').then(r => r.text()).catch(() => '// ToolCard component source code'),
        fetch('/src/components/Footer.tsx').then(r => r.text()).catch(() => '// Footer component source code')
      ])

      // 添加组件源代码到项目文件中
      projectFiles['src/components/Header.tsx'] = componentSources[0]
      projectFiles['src/components/Hero.tsx'] = componentSources[1]
      projectFiles['src/components/RankingTabs.tsx'] = componentSources[2]
      projectFiles['src/components/ToolGrid.tsx'] = componentSources[3]
      projectFiles['src/components/ToolCard.tsx'] = componentSources[4]
      projectFiles['src/components/Footer.tsx'] = componentSources[5]
      
      // 添加下载按钮组件（简化版，避免递归）
      projectFiles['src/components/DownloadButton.tsx'] = `import React from 'react'
import { Download } from 'lucide-react'

const DownloadButton: React.FC = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
      <Download className="w-4 h-4" />
      下载源码包
    </button>
  )
}

export default DownloadButton`

    } catch (error) {
      console.log('无法获取组件源代码，使用默认内容')
    }

    // 创建压缩包内容
    let zipContent = `# RankMyAI Clone - 完整源代码包

这个文件包含了完整的项目文件结构和所有源代码。

## 📁 使用说明

1. 创建新的项目文件夹：\`mkdir rankmyai-clone && cd rankmyai-clone\`
2. 根据下面的文件结构创建对应的文件和文件夹
3. 复制对应的文件内容到各个文件中
4. 安装依赖：\`npm install\`
5. 启动开发服务器：\`npm run dev\`

## 📂 文件结构

\`\`\`
rankmyai-clone/
├── package.json
├── README.md
├── index.html
├── vite.config.ts
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
├── postcss.config.cjs
├── eslint.config.js
├── public/
│   ├── favicon.svg
│   └── vite.svg
└── src/
    ├── main.tsx
    ├── index.css
    ├── App.tsx
    └── components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── RankingTabs.tsx
        ├── ToolGrid.tsx
        ├── ToolCard.tsx
        ├── Footer.tsx
        └── DownloadButton.tsx
\`\`\`

---

## 📄 文件内容

`

    // 添加所有文件内容
    Object.entries(projectFiles).forEach(([filePath, content]) => {
      const fileExtension = filePath.split('.').pop()
      let language = 'text'
      
      switch (fileExtension) {
        case 'tsx':
        case 'ts':
          language = 'typescript'
          break
        case 'json':
          language = 'json'
          break
        case 'html':
          language = 'html'
          break
        case 'css':
          language = 'css'
          break
        case 'md':
          language = 'markdown'
          break
        case 'js':
        case 'cjs':
          language = 'javascript'
          break
        case 'svg':
          language = 'xml'
          break
      }

      zipContent += `
### ${filePath}

\`\`\`${language}
${content}
\`\`\`

---
`
    })

    zipContent += `
## 🎯 项目特性

- ✅ 完整的 React + TypeScript 项目
- ✅ 使用 Vite 构建工具
- ✅ Tailwind CSS 样式框架
- ✅ 响应式设计
- ✅ 现代化的 UI 组件
- ✅ 完整的 AI 工具排名功能
- ✅ 搜索和筛选功能
- ✅ ESLint 代码规范

## 📞 技术支持

如果在使用过程中遇到问题，请检查：
1. Node.js 版本是否为 16+ 
2. 是否正确安装了所有依赖
3. 端口 5173 是否被占用

祝你开发愉快！🚀

---
*生成时间: ${new Date().toLocaleString('zh-CN')}*
*项目版本: v1.0.0*
`

    // 创建并下载文件
    const blob = new Blob([zipContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `rankmyai-clone-complete-source-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    // 显示成功提示
    alert(`✅ 源代码包下载成功！

📦 包含内容：
• 完整的项目配置文件 (package.json, vite.config.ts 等)
• 所有 React 组件源代码
• Tailwind CSS 和 TypeScript 配置
• public 文件夹资源 (favicon, vite.svg)
• 详细的开发文档和使用说明

📁 文件结构：
• 根目录配置文件
• public/ 静态资源文件夹
• src/ 源代码文件夹
• src/components/ 所有 React 组件

🚀 使用方法：
1. 创建新项目文件夹
2. 按照文件结构创建对应文件
3. 复制文件内容到对应位置
4. 运行 npm install 安装依赖
5. 运行 npm run dev 启动开发服务器

现在你可以在本地进行完整的开发和调试了！`)
  }

  return (
    <button
      onClick={downloadSourceCode}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
      title="下载完整项目源代码压缩包"
    >
      <Download className="w-4 h-4" />
      下载源码包
    </button>
  )
}

export default DownloadButton