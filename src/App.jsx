import Header from './components/Header'
import Sidebar from './components/MainSidebar'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="p-6 w-full">
        </main>
      </div>
    </div>
  )
}

