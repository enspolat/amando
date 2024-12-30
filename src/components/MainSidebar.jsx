import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import HomeIcon from '../assets/home.svg'
import WalletIcon from '../assets/wallet.svg'
import DexIcon from '../assets/dex.svg'
import PoolIcon from '../assets/pool.svg'
import FarmIcon from '../assets/farm.svg'
import JungleIcon from '../assets/jungle.svg'
import IpoIcon from '../assets/ipo.svg'
import logo from "../assets/logo.svg"


export default function Sidebar() {

    const [activeItem, setActiveItem] = useState("Home");
    const location = useLocation();

    const menuItems = [
        { icon: HomeIcon, label: "Home", path: "/" },
        { icon: WalletIcon, label: "Wallet", path: "/wallet" },
        { icon: DexIcon, label: "DEX", path: "/dex" },
        { icon: PoolIcon, label: "Pool", path: "/pool" },
        { icon: FarmIcon, label: "Farm", path: "/farm" },
        { icon: JungleIcon, label: "Jungle", path: "/jungle" },
        { icon: IpoIcon, label: "IPO", path: "/ipo" },
    ];
    useEffect(() => {
        const currentPath = location.pathname;
        const currentItem = menuItems.find(item => item.path === currentPath);
        if (currentItem) {
            setActiveItem(currentItem.label);
        }
    }, [location]);

    return (
        <aside className="bg-[#111318] fixed left-0 top-0 h-screen w-64 border-r border-gray-800">
            <div className="flex flex-col h-full">
                <div className="flex-1 py-6">
                    <nav className="px-4 space-y-2">
                        <span className="text-xl font-bold text-white flex items-center mb-14">
                            <img className="mr-2" src={logo} alt="logo" />
                            Amando
                        </span>
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                onClick={() => setActiveItem(item.label)}
                                className={`
                                    flex items-center gap-3 w-full px-4 py-3 text-sm rounded-lg transition-colors
                                    ${activeItem === item.label
                                        ? "bg-[#1F1F1F] text-[#F15223]"
                                        : "text-gray-400 hover:bg-[#1F1F1F] hover:text-[#F15223]"
                                    }
                                `}
                            >
                                <img
                                    src={item.icon}
                                    alt={`${item.label} icon`}
                                    className="w-5 h-5 transition-all duration-200"
                                    style={{
                                        filter: activeItem === item.label
                                            ? "invert(42%) sepia(94%) saturate(1352%) hue-rotate(346deg) brightness(97%) contrast(101%)"
                                            : "invert(42%) sepia(9%) saturate(6%) hue-rotate(314deg) brightness(94%) contrast(86%)"
                                    }}
                                />
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>
                <div className="w-[200px] bg-[#1F1F1F] p-4 mx-auto shadow-lg mb-28 rounded-lg h-[176px]">
                    <div>
                        <span>Live Trading Deals</span>
                    </div>
                    <div className="gap-4">
                        <div className="flex flex-col justify-between text-sm pt-4">
                            <div className="flex justify-between">
                                <span>Swap</span>
                                <span className="text-[#999999]">10:20:01 AM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>WBNB/BUSD</span>
                                <span className="text-[#2D9F64]">$ 3,122.51</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between text-sm pt-4">
                            <div className="flex justify-between">
                                <span>Swap</span>
                                <span className="text-[#999999]">10:20:01 AM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>WBNB/USDT</span>
                                <span className="text-[#2D9F64]">$ 4,212.51</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}