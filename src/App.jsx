import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import CreateWallet from './pages/Wallet/CreateWallet';
import BackupWallet from './pages/Wallet/BackupWallet';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#111318]">
        <Sidebar />
        <div className="lg:pl-64">
          <Header />
          <main className="p-6 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/wallet/create" element={<CreateWallet />} />
              <Route path="/wallet/create/backup" element={<BackupWallet />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}