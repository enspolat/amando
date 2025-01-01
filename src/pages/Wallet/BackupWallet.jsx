import { useState } from 'react';
import WalletBreadcrumb from './WalletBreadcrumb';
import shield from '../../assets/shield.svg';
import { useNavigate } from 'react-router-dom';

export default function BackupWallet() {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/wallet/create/backup/confirm');
    };

    return (
        <div className="max-w-[656px] mx-auto mt-10">
            <WalletBreadcrumb currentPage="Back Up Your Wallet" />

            <div className="text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Back Up Your Wallet</h1>
                <p className="text-gray-400 mb-16">
                    In the next step you will see 12 words that allows you to recover a wallet
                </p>

                <div className="flex justify-center mb-16">
                    <img src={shield} alt="shield" />
                </div>

                <div className="flex items-center gap-2 mb-8 justify-center">
                    <input
                        type="checkbox"
                        id="understand"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className="w-5 h-5 rounded border-gray-400 bg-[#1F1F1F] text-[#F15223] focus:ring-[#F15223]"
                    />
                    <label htmlFor="understand" className="text-sm text-gray-400">
                        I understand that if I lose my recovery words, I will not be able to access my wallet
                    </label>
                </div>

                <button
                    onClick={handleNext}
                    disabled={!isChecked}
                    className={`w-full h-[56px] rounded-lg transition-all duration-300 ${isChecked
                        ? "bg-custom-gradient hover:opacity-90"
                        : "bg-[#1F1F1F] text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
} 