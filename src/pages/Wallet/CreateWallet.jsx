import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import WalletBreadcrumb from './WalletBreadcrumb';

export default function CreateWallet() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const hasEightChar = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const passwordsMatch = password === confirmPassword;

    const isValid = hasEightChar && hasUpperCase && hasDigit && hasSymbol && passwordsMatch && confirmPassword.length > 0;

    const handleContinue = () => {
        if (isValid) {
            navigate('/wallet/create/backup');
        }
    };

    return (
        <div className="max-w-[656px] mx-auto mt-24">
            <WalletBreadcrumb />

            <h1 className="text-2xl font-bold text-white mb-8">Create a New Wallet</h1>

            <div className="space-y-6">
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-[#1F1F1F] text-white rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-1 focus:ring-[#F15223]"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                        {showPassword ? (
                            <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                        ) : (
                            <EyeIcon className="w-5 h-5 text-gray-400" />
                        )}
                    </button>
                </div>

                <div className="space-y-2 text-sm">
                    <p className={hasEightChar ? "text-green-500" : "text-gray-400"}>
                        • 8 or more character
                    </p>
                    <p className={hasUpperCase ? "text-green-500" : "text-gray-400"}>
                        • At least one upper case character
                    </p>
                    <p className={hasDigit ? "text-green-500" : "text-gray-400"}>
                        • At least one digit
                    </p>
                    <p className={hasSymbol ? "text-green-500" : "text-gray-400"}>
                        • At least one symbols
                    </p>
                </div>

                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-[#1F1F1F] text-white rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-1 focus:ring-[#F15223]"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                        {showConfirmPassword ? (
                            <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                        ) : (
                            <EyeIcon className="w-5 h-5 text-gray-400" />
                        )}
                    </button>
                </div>

                <button
                    onClick={handleContinue}
                    type="button"
                    disabled={!isValid}
                    className={`w-full h-[56px] rounded-lg transition-all duration-300 ${isValid
                        ? "bg-gradient-to-r from-[#8000FF] to-[#F15223] hover:opacity-90"
                        : "bg-[#1F1F1F] text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}