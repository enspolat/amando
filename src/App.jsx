import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/MainSidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Dex from './pages/Dex';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Sidebar />
        <div className="pl-64">
          <Header />
          <main className="p-6 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/dex" element={<Dex />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}