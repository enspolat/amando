import React from 'react'
import PropTypes from 'prop-types'
import { X } from 'lucide-react'
import logo from '../assets/logo.svg';
import metamask from '../assets/metamask.svg';
import binanceWallet from '../assets/binance-wallet.svg';
import walletConnect from '../assets/wallet-connect.svg';
import trustWallet from '../assets/trust-wallet.svg';

export default function WalletModal({ isOpen, onClose }) {
    if (!isOpen) return null

    const amandoWallets = [{ id: 'amando', name: 'Amando Wallet', icon: logo },]
    const wallets = [
        { id: 'metamask', name: 'MetaMask', icon: metamask },
        { id: 'binance', name: 'Binance Wallet', icon: binanceWallet },
        { id: 'connect', name: 'Connect Wallet', icon: walletConnect },
        { id: 'trust', name: 'Trust Wallet', icon: trustWallet },
    ]

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full max-w-sm bg-[#0A0A0A] rounded-lg shadow-xl p-4">
                <div className="flex items-center justify-between p-4 ">
                    <h2 className="text-lg font-medium text-white">Connect to a wallet</h2>
                    <button
                        onClick={onClose}
                        className="p-1 text-gray-400 hover:text-[#F15223] transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                </div>
                <div className=" mb-4  space-y-2 height-[72px] overflow-y-auto">
                    {amandoWallets.map((wallet) => (
                        <button
                            key={wallet.id}
                            className="w-full flex items-center gap-3 p-3 rounded-lg text-left text-white hover:text-[#F15223] hover:bg-[#141414] transition-colors"
                        >
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full">
                                <img src={wallet.icon} className="text-lg" />
                            </div>
                            <span>{wallet.name}</span>
                        </button>
                    ))}
                </div>
                <div className='border-b border-gray-800'></div>



                <div className="mt-4 space-y-2 height-[72px] overflow-y-auto">
                    {wallets.map((wallet) => (
                        <button
                            key={wallet.id}
                            className="w-full flex items-center gap-3 p-3 rounded-lg text-left text-white hover:text-[#F15223] hover:bg-[#141414] transition-colors"
                        >
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full">
                                <img src={wallet.icon} className="text-lg" />
                            </div>
                            <span>{wallet.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

WalletModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

