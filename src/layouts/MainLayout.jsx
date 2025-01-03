import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/MainSidebar';

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-black">
            <Sidebar />
            <div className="lg:pl-64 pl-0">
                <Header />
                <main className="p-6 w-full ">
                    <Outlet />
                </main>
            </div>
        </div>
    );
} 