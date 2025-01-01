import { CheckIcon } from '@heroicons/react/24/outline';

export default function SuccessModal({ isOpen, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#111318] p-8 rounded-lg w-full max-w-sm mx-4">
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center">
                        <CheckIcon className="w-8 h-8 text-green-500" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white text-center mb-8">
                    Successfully Import
                </h2>

                <button
                    onClick={onConfirm}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#8000FF] to-[#F15223] text-white hover:opacity-90 transition-all"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
} 