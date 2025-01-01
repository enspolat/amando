import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from "../pages/Home";
import Wallet from '../pages/Wallet';
import Dex from '../pages/Dex';
import CreateWallet from '../pages/Wallet/CreateWallet';
import BackupWallet from '../pages/Wallet/BackupWallet';
import ConfirmSeedPhrase from '../pages/Wallet/ConfirmSeedPhrase';


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
                path: "wallet",
                element: <Wallet />,
                children: [
                    {
                        path: "create",
                        element: <CreateWallet />,

                        children: [
                            {
                                path: "backup",
                                element: <BackupWallet />,
                                children: [
                                    {
                                        path: "confirm",
                                        element: <ConfirmSeedPhrase />
                                    }
                                ],
                            }
                        ],
                    },

                ]
            },
            {
                path: '/dex',
                element: <Dex />
            },
        ]
    }
]); 