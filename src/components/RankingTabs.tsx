import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { Trophy, TrendingUp, DollarSign, Star } from 'lucide-react'

interface RankingTabsProps {
  activeRanking: string
  setActiveRanking: (ranking: string) => void
}

const RankingTabs = ({ activeRanking, setActiveRanking }: RankingTabsProps) => {
  const rankings = [
    {
      id: 'overall',
      label: '综合排名',
      icon: Trophy,
      description: '基于用户评分、使用量和专家评价的综合排名'
    },
    {
      id: 'traffic',
      label: '流量排名',
      icon: TrendingUp,
      description: '基于网站访问量和用户活跃度的排名'
    },
    {
      id: 'investment',
      label: '投资排名',
      icon: DollarSign,
      description: '基于融资金额和投资热度的排名'
    },
    {
      id: 'review',
      label: '评价排名',
      icon: Star,
      description: '基于用户评分和评价质量的排名'
    }
  ]

  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">AI工具排行榜</h2>
        <p className="text-muted-foreground">多维度排名，助你找到最优秀的AI工具</p>
      </div>

      <Tabs value={activeRanking} onValueChange={setActiveRanking} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-muted/50">
          {rankings.map((ranking) => (
            <TabsTrigger
              key={ranking.id}
              value={ranking.id}
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <ranking.icon className="h-5 w-5" />
              <div className="text-center">
                <div className="font-medium text-sm">{ranking.label}</div>
                <div className="text-xs text-muted-foreground hidden lg:block mt-1">
                  {ranking.description}
                </div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

export default RankingTabs