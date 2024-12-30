import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from "../pages/Home";
import Wallet from '../pages/Wallet';
import Dex from '../pages/Dex';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/wallet',
                element: <Wallet />
            },
            {
                path: '/dex',
                element: <Dex />
            },
        ]
    }
]); 