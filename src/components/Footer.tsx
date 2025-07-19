import { Zap, Github, Twitter, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

const Footer = () => {
  const footerLinks = {
    产品: [
      { name: 'AI工具排行榜', href: '#' },
      { name: '工具分类', href: '#' },
      { name: '提交工具', href: '#' },
      { name: 'API接口', href: '#' },
    ],
    资源: [
      { name: '使用指南', href: '#' },
      { name: '博客文章', href: '#' },
      { name: '行业报告', href: '#' },
      { name: '开发者文档', href: '#' },
    ],
    公司: [
      { name: '关于我们', href: '#' },
      { name: '联系我们', href: '#' },
      { name: '加入我们', href: '#' },
      { name: '媒体资源', href: '#' },
    ],
    法律: [
      { name: '隐私政策', href: '#' },
      { name: '服务条款', href: '#' },
      { name: 'Cookie政策', href: '#' },
      { name: '版权声明', href: '#' },
    ],
  }

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">AI工具排行榜</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              发现和评价最优秀的AI工具。基于真实用户评价的智能排行榜，帮助你找到最适合的AI解决方案。
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 AI工具排行榜. 保留所有权利.
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>数据更新时间: 2025年7月</span>
            <span>•</span>
            <span>收录工具: 25,000+</span>
            <span>•</span>
            <span>用户评价: 100万+</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer