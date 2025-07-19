import { Star, ExternalLink, TrendingUp, DollarSign, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface Tool {
  id: number
  name: string
  description: string
  category: string
  rating: number
  reviews: number
  logo: string
  tags: string[]
  pricing: string
  traffic: number
  investment: number
  featured?: boolean
}

interface ToolCardProps {
  tool: Tool
  featured?: boolean
}

const ToolCard = ({ tool, featured = false }: ToolCardProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${featured ? 'ring-2 ring-accent/20 shadow-md' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={tool.logo} alt={tool.name} />
              <AvatarFallback>{tool.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {tool.category}
              </Badge>
            </div>
          </div>
          {featured && (
            <Badge className="bg-accent text-accent-foreground">
              精选
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {tool.description}
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-sm">{tool.rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{formatNumber(tool.reviews)} 评价</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <TrendingUp className="h-3 w-3" />
            <span>流量: {formatNumber(tool.traffic)}</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <DollarSign className="h-3 w-3" />
            <span>投资: ${formatNumber(tool.investment)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tool.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tool.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <Badge 
            variant={tool.pricing === 'Freemium' ? 'default' : tool.pricing === '免费' ? 'secondary' : 'outline'}
            className="text-xs"
          >
            {tool.pricing}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex space-x-2 w-full">
          <Button variant="outline" size="sm" className="flex-1">
            查看详情
          </Button>
          <Button size="sm" className="flex-1">
            <ExternalLink className="h-4 w-4 mr-1" />
            访问
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ToolCard