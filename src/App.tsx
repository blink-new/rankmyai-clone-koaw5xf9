import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RankingTabs from './components/RankingTabs'
import ToolGrid from './components/ToolGrid'
import Footer from './components/Footer'
import { Toaster } from './components/ui/toaster'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeRanking, setActiveRanking] = useState('overall')

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="container mx-auto px-4 py-8">
          <RankingTabs 
            activeRanking={activeRanking}
            setActiveRanking={setActiveRanking}
          />
          <ToolGrid 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            activeRanking={activeRanking}
          />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App