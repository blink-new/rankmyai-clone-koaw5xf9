import { useState, useMemo } from 'react'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Badge } from './ui/badge'
import ToolCard from './ToolCard'
import { Filter, SortAsc } from 'lucide-react'

interface ToolGridProps {
  searchQuery: string
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  activeRanking: string
}

// Mock data for AI tools
const mockTools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: '强大的对话式AI助手，能够回答问题、协助写作、编程等多种任务',
    category: '聊天机器人',
    rating: 4.8,
    reviews: 15420,
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop&crop=center',
    tags: ['对话', 'GPT-4', '写作', '编程'],
    pricing: 'Freemium',
    traffic: 1800000000,
    investment: 10000000000,
    featured: true
  },
  {
    id: 2,
    name: 'Midjourney',
    description: '顶级AI图像生成工具，创造令人惊叹的艺术作品和设计',
    category: '图像生成',
    rating: 4.7,
    reviews: 8930,
    logo: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=100&h=100&fit=crop&crop=center',
    tags: ['图像生成', '艺术', '设计', 'Discord'],
    pricing: '付费',
    traffic: 150000000,
    investment: 100000000,
    featured: true
  },
  {
    id: 3,
    name: 'GitHub Copilot',
    description: 'AI编程助手，提供智能代码补全和编程建议',
    category: '代码助手',
    rating: 4.6,
    reviews: 12500,
    logo: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=100&h=100&fit=crop&crop=center',
    tags: ['编程', '代码补全', 'VS Code', 'GitHub'],
    pricing: '付费',
    traffic: 80000000,
    investment: 500000000,
    featured: true
  },
  {
    id: 4,
    name: 'Notion AI',
    description: '集成在Notion中的AI写作助手，帮助提升文档创作效率',
    category: '文本写作',
    rating: 4.5,
    reviews: 6780,
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
    tags: ['写作', '笔记', '协作', '生产力'],
    pricing: 'Freemium',
    traffic: 120000000,
    investment: 275000000,
    featured: false
  },
  {
    id: 5,
    name: 'Runway ML',
    description: '专业的AI视频编辑和生成工具，支持多种创意功能',
    category: '视频制作',
    rating: 4.4,
    reviews: 3420,
    logo: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=100&h=100&fit=crop&crop=center',
    tags: ['视频编辑', '生成', '创意', '专业'],
    pricing: 'Freemium',
    traffic: 25000000,
    investment: 141000000,
    featured: false
  },
  {
    id: 6,
    name: 'ElevenLabs',
    description: '高质量AI语音合成工具，支持多语言和情感表达',
    category: '语音合成',
    rating: 4.6,
    reviews: 4560,
    logo: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=100&h=100&fit=crop&crop=center',
    tags: ['语音合成', '多语言', '情感', '高质量'],
    pricing: 'Freemium',
    traffic: 18000000,
    investment: 80000000,
    featured: false
  }
]

const categories = [
  { value: 'all', label: '全部分类' },
  { value: '聊天机器人', label: '聊天机器人' },
  { value: '图像生成', label: '图像生成' },
  { value: '文本写作', label: '文本写作' },
  { value: '代码助手', label: '代码助手' },
  { value: '视频制作', label: '视频制作' },
  { value: '语音合成', label: '语音合成' },
]

const sortOptions = [
  { value: 'rating', label: '评分最高' },
  { value: 'reviews', label: '评价最多' },
  { value: 'traffic', label: '流量最高' },
  { value: 'name', label: '名称排序' },
]

const ToolGrid = ({ searchQuery, selectedCategory, setSelectedCategory, activeRanking }: ToolGridProps) => {
  const [sortBy, setSortBy] = useState('rating')

  const filteredAndSortedTools = useMemo(() => {
    const filtered = mockTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })

    // Sort based on active ranking and sort option
    filtered.sort((a, b) => {
      switch (activeRanking) {
        case 'traffic':
          return b.traffic - a.traffic
        case 'investment':
          return b.investment - a.investment
        case 'review':
          return b.rating - a.rating
        default: // overall
          switch (sortBy) {
            case 'rating':
              return b.rating - a.rating
            case 'reviews':
              return b.reviews - a.reviews
            case 'traffic':
              return b.traffic - a.traffic
            case 'name':
              return a.name.localeCompare(b.name)
            default:
              return b.rating - a.rating
          }
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, activeRanking, sortBy])

  return (
    <div>
      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择分类" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <SortAsc className="h-4 w-4 text-muted-foreground" />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="排序方式" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1" />

        <div className="text-sm text-muted-foreground flex items-center">
          找到 {filteredAndSortedTools.length} 个工具
        </div>
      </div>

      {/* Featured Tools */}
      {searchQuery === '' && selectedCategory === 'all' && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              精选推荐
            </Badge>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedTools.filter(tool => tool.featured).map((tool) => (
              <ToolCard key={tool.id} tool={tool} featured />
            ))}
          </div>
        </div>
      )}

      {/* All Tools */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-4">
          {searchQuery || selectedCategory !== 'all' ? '搜索结果' : '全部工具'}
        </h3>
      </div>

      {filteredAndSortedTools.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">没有找到匹配的工具</div>
          <Button variant="outline" onClick={() => {
            setSelectedCategory('all')
          }}>
            查看全部工具
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}

      {/* Load More */}
      {filteredAndSortedTools.length > 0 && (
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            加载更多工具
          </Button>
        </div>
      )}
    </div>
  )
}

export default ToolGrid