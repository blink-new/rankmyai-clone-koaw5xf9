import { Search, TrendingUp, Users, Star } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface HeroProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const Hero = ({ searchQuery, setSearchQuery }: HeroProps) => {
  const stats = [
    { icon: TrendingUp, label: 'AI工具', value: '25,000+' },
    { icon: Users, label: '用户评价', value: '100万+' },
    { icon: Star, label: '平均评分', value: '4.2' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            发现最佳
            <span className="text-primary"> AI工具</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            浏览、评价和比较超过25,000个AI工具。基于真实用户评价的智能排行榜，帮你找到最适合的AI解决方案。
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜索AI工具，如：ChatGPT, Midjourney, Claude..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg h-14 rounded-full border-2 focus:border-primary"
              />
              <Button 
                size="lg" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-8"
              >
                搜索
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Popular Categories */}
          <div className="mt-12">
            <p className="text-sm text-muted-foreground mb-4">热门分类：</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['聊天机器人', '图像生成', '文本写作', '代码助手', '视频制作', '语音合成'].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  onClick={() => setSearchQuery(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero