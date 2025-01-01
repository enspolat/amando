import { useState, useEffect } from 'react';
import WalletBreadcrumb from './WalletBreadcrumb';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import warning from '../../assets/warning.svg';
import clipboard from '../../assets/clipboard.svg'

const wordList = [
    'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse',
    'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act',
    'action', 'actor', 'actress', 'actual', 'adapt', 'add', 'addict', 'address', 'adjust', 'admit',
    'adult', 'advance', 'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'age', 'agent',
    'agree', 'ahead', 'aim', 'air', 'airport', 'aisle', 'alarm', 'album', 'alcohol', 'alert',
];

export default function ConfirmSeedPhrase() {
    const [seedPhrases, setSeedPhrases] = useState([]);
    const [copied, setCopied] = useState(false);

    const generateRandomPhrases = () => {
        const phrases = [];
        const usedIndexes = new Set();

        while (phrases.length < 12) {
            const randomIndex = Math.floor(Math.random() * wordList.length);
            if (!usedIndexes.has(randomIndex)) {
                usedIndexes.add(randomIndex);
                phrases.push(wordList[randomIndex]);
            }
        }

        return phrases;
    };

    useEffect(() => {
        setSeedPhrases(generateRandomPhrases());
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(seedPhrases.join(' '));
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Kopyalama başarısız:', err);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-24 justify-center items-center flex flex-col">
            <WalletBreadcrumb />

            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Confirm Your Seed Phrase
                </h1>
                <p className="text-gray-400 max-w-md">
                    Write down or copy these words in the right order and save them somewhere safe.
                </p>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
                {seedPhrases.map((phrase, index) => (
                    <div
                        key={index}
                        className="bg-[#1F1F1F] rounded-lg p-3 flex items-center gap-2"
                    >
                        <span className="text-gray-400">{index + 1}.</span>
                        <span className="text-white">{phrase}</span>
                    </div>
                ))}
            </div>

            <button
                onClick={handleCopy}
                className="flex items-center max-w-40  justify-center gap-2 bg-[#1F1F1F] text-[#F15223] w-full py-3 rounded-lg hover:opacity-90 transition-opacity mb-8"
            >
                {copied ? (
                    <>
                        <ClipboardDocumentCheckIcon className="w-5 h-5" />
                        Copied!
                    </>
                ) : (
                    <>
                        <img src={clipboard} alt="clipboard" />
                        Copy
                    </>
                )}
            </button>

            <div className="bg-[#FFBB49] bg-opacity-10 border border-[#FFBB49] rounded-lg p-2 mb-8 w-full">
                <p className="text-white text-sm flex items-center gap-2">
                    <img src={warning} alt="" />
                    Never share recovery phrase with anyone, store it securely!
                </p>
            </div>

            <button
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#8000FF] to-[#F15223] text-white hover:opacity-90 transition-opacity"
            >
                Next
            </button>
        </div>
    );
} 