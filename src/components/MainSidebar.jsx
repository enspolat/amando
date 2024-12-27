import { Home, Wallet, BarChart2, Layers, SproutIcon as Seedling, TreePine, Rocket } from 'lucide-react'

export default function Sidebar() {
    const menuItems = [
        { icon: Home, label: 'Home', active: true },
        { icon: Wallet, label: 'Wallet' },
        { icon: BarChart2, label: 'DEX' },
        { icon: Layers, label: 'Pool' },
        { icon: Seedling, label: 'Farm' },
        { icon: TreePine, label: 'Jungle' },
        { icon: Rocket, label: 'IPO' },
    ]

    return (
        <aside className="bg-[#141414]  fixed left-0 top-0 h-screen w-64 bg-black border-r border-gray-800">

            <div className="flex flex-col h-full">
                <div className="flex-1 py-6">

                    <nav className="px-4 space-y-2">
                        <span className="text-xl font-bold text-white">Amando</span>

                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href="#"
                                className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${item.active
                                    ? 'bg-purple-600/10 text-purple-500'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="p-4 border-t border-gray-800">
                    <div className="space-y-1">
                        <div className="text-xs text-gray-400">Live Trading Deals</div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">WBNB/BUSD</span>
                            <span className="text-green-500">$3,122.41</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

