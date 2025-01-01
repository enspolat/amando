import { useState, useEffect } from 'react';
import WalletBreadcrumb from './WalletBreadcrumb';

export default function VerifyRecoveryPhrase() {
    // Önceki sayfadan gelen seed phrase'leri simüle ediyoruz
    // Gerçek uygulamada bu veriler güvenli bir şekilde aktarılmalı
    const [originalPhrases, setOriginalPhrases] = useState([
        'script', 'recovery', 'music', 'content',
        'mint', 'horse', 'pilot', 'wallet',
        'urge', 'globe', 'easy', 'scale'
    ]);

    const [selectedPhrases, setSelectedPhrases] = useState([]);
    const [shuffledPhrases, setShuffledPhrases] = useState([]);

    // Kelimeleri karıştır
    useEffect(() => {
        const shuffled = [...originalPhrases]
            .sort(() => Math.random() - 0.5)
            .map(phrase => ({ text: phrase, isSelected: false }));
        setShuffledPhrases(shuffled);
    }, []);

    const handlePhraseClick = (phrase, index) => {
        if (!shuffledPhrases[index].isSelected) {
            setSelectedPhrases([...selectedPhrases, phrase]);
            setShuffledPhrases(shuffledPhrases.map((p, i) =>
                i === index ? { ...p, isSelected: true } : p
            ));
        }
    };

    const handleSelectedPhraseClick = (phrase, index) => {
        setSelectedPhrases(selectedPhrases.filter((_, i) => i !== index));
        setShuffledPhrases(shuffledPhrases.map(p =>
            p.text === phrase ? { ...p, isSelected: false } : p
        ));
    };

    // Seçilen kelimeler doğru sırada mı kontrol et
    const isCorrectOrder = selectedPhrases.every((phrase, index) =>
        phrase === originalPhrases[index]
    );

    return (
        <div className="max-w-2xl mx-auto mt-24">
            <WalletBreadcrumb />

            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Verify Recovery Phrase
                </h1>
                <p className="text-gray-400">
                    Select each word in the order it was presented to you
                </p>
            </div>

            {/* Seçilen kelimeler */}
            <div className="grid grid-cols-4 gap-4 mb-8">
                {Array(12).fill(null).map((_, index) => (
                    <div
                        key={`selected-${index}`}
                        onClick={() => selectedPhrases[index] && handleSelectedPhraseClick(selectedPhrases[index], index)}
                        className={`
                            bg-[#1F1F1F] rounded-lg p-3 flex items-center gap-2 
                            ${selectedPhrases[index] ? 'cursor-pointer hover:bg-[#2A2A2A]' : 'opacity-50'}
                        `}
                    >
                        <span className="text-gray-400">{index + 1}.</span>
                        <span className="text-white">{selectedPhrases[index] || ''}</span>
                    </div>
                ))}
            </div>

            {/* Karıştırılmış kelimeler */}
            <div className="grid grid-cols-4 gap-4 mb-8">
                {shuffledPhrases.map((phrase, index) => (
                    <button
                        key={`shuffled-${index}`}
                        onClick={() => !phrase.isSelected && handlePhraseClick(phrase.text, index)}
                        disabled={phrase.isSelected}
                        className={`
                            p-3 rounded-lg text-center transition-all
                            ${phrase.isSelected
                                ? 'bg-[#1F1F1F] text-gray-600 cursor-not-allowed'
                                : 'bg-[#1F1F1F] text-white hover:bg-[#2A2A2A] cursor-pointer'}
                        `}
                    >
                        {phrase.text}
                    </button>
                ))}
            </div>

            <button
                disabled={selectedPhrases.length !== 12 || !isCorrectOrder}
                className={`
                    w-full py-3 rounded-lg transition-all
                    ${selectedPhrases.length === 12 && isCorrectOrder
                        ? "bg-gradient-to-r from-[#8000FF] to-[#F15223] text-white hover:opacity-90"
                        : "bg-[#1F1F1F] text-gray-400 cursor-not-allowed"}
                `}
            >
                Next
            </button>
        </div>
    );
} 