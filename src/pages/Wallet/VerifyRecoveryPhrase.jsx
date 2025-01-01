import { useState, useEffect } from 'react';
import WalletBreadcrumb from './WalletBreadcrumb';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../../components/SuccessModal';


export default function VerifyRecoveryPhrase() {
    const navigate = useNavigate();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleNext = () => {
        setShowSuccessModal(true);
    };

    const handleConfirm = () => {
        navigate('/');
    };

    const [allPhrases, setAllPhrases] = useState(() => {
        const stored = localStorage.getItem('seedPhrases');
        return stored ? JSON.parse(stored) : [];
    });

    const [requiredIndexes] = useState(() => {
        const indexes = [8, 11, 6, 0];
        return indexes;
    });

    const [selectedPhrases, setSelectedPhrases] = useState(Array(4).fill(''));

    useEffect(() => {
        return () => {
            localStorage.removeItem('seedPhrases');
        };
    }, []);

    useEffect(() => {
        if (allPhrases.length === 0) {
            navigate('/wallet');
        }
    }, [allPhrases, navigate]);

    return (
        <div className="max-w-2xl mx-auto mt-24">
            <WalletBreadcrumb />

            <div className="text-center mb-24">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Verify Recovery Phrase
                </h1>
                <p className="text-gray-400">
                    Select each word in the order it was presented to you
                </p>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-20 text-white">
                {requiredIndexes.map((originalIndex, index) => (
                    <div
                        key={`selected-${index}`}
                        className="bg-black border border-[#333333] rounded-lg p-3 flex items-center gap-2"
                    >
                        <span className="text-gray-400">{originalIndex + 1}.</span>
                        <span className="text-white">{selectedPhrases[index]}</span>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
                {allPhrases.map((phrase, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            const emptyIndex = selectedPhrases.findIndex(p => !p);
                            if (emptyIndex !== -1) {
                                const newSelected = [...selectedPhrases];
                                newSelected[emptyIndex] = phrase;
                                setSelectedPhrases(newSelected);
                            }
                        }}
                        disabled={selectedPhrases.includes(phrase)}
                        className={`
                           bg-black p-3 rounded-lg text-center transition-all border border-[#333333]
                            ${selectedPhrases.includes(phrase)
                                ? 'bg-[#1F1F1F] text-gray-600 cursor-not-allowed'
                                : 'bg-[#1F1F1F] text-white hover:bg-[#2A2A2A] cursor-pointer'}
                        `}
                    >
                        {phrase}
                    </button>
                ))}
            </div>

            <button
                onClick={handleNext}
                disabled={selectedPhrases.some(phrase => !phrase)}
                className={`
                    w-full py-3 rounded-lg transition-all
                    ${selectedPhrases.every(phrase => phrase)
                        ? "bg-gradient-to-r from-[#8000FF] to-[#F15223] text-white hover:opacity-90"
                        : "bg-[#1F1F1F] text-gray-400 cursor-not-allowed"}
                `}
            >
                Next
            </button>
            <SuccessModal
                isOpen={showSuccessModal}
                onConfirm={handleConfirm}
            />
        </div>
    );
} 