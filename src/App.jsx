import Intro from './components/Intro'
import Counter from './components/Counter'
import Gallery from './components/Gallery'
import Wrapped from './components/Wrapped'
import Quiz from './components/Quiz'
import Timeline from './components/Timeline'
import LoveLetter from './components/LoveLetter'
import FinalScreen from './components/FinalScreen'
import FloatingHearts from './components/FloatingHearts'
import PageDeck from './components/PageDeck'

function App() {
  return (
    <main>
      <FloatingHearts />
      <PageDeck
        pages={[
          { id: "inicio", label: "Inicio", duration: 9000, Component: Intro },
          { id: "contador", label: "Tempo", duration: 8000, Component: Counter },
          { id: "wrapped", label: "Wrapped", duration: 11000, Component: Wrapped },
          { id: "fotos", label: "Fotos", duration: 13000, Component: Gallery },
          { id: "quiz", label: "Quiz", duration: 60000, Component: Quiz, waitsForInteraction: true },
          { id: "historia", label: "Historia", duration: 14000, Component: Timeline },
          { id: "carta", label: "Carta", duration: 15000, Component: LoveLetter },
          { id: "final", label: "Final", duration: 10000, Component: FinalScreen },
        ]}
      />
    </main>
  )
}

export default App
