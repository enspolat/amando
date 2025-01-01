import { Routes, Route, useNavigate } from 'react-router-dom';
import CreateWallet from './CreateWallet';
import BackupWallet from './BackupWallet';
import VerifyRecoveryPhrase from './VerifyRecoveryPhrase';
import ConfirmSeedPhrase from './ConfirmSeedPhrase';

export default function Wallet() {
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path="/" element={
                <div>
                    <div className="flex justify-center flex-col items-center mt-16 gap-2">
                        <h1 className="flex text-center text-2xl font-bold text-white justify-center">
                            Welcome To Amando Wallet
                        </h1>
                        <h1 className="text-sm text-[#999999]">
                            Secure and trusted multi-chain crypto wallet
                        </h1>
                    </div>
                    <div className="flex justify-center flex-col items-center mt-16 gap-8">
                        <button
                            onClick={() => navigate('/wallet/create')}
                            className="bg-custom-gradient lg:w-[656px] sm:w-[300px] w-[200px] h-[56px] rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Create A Wallet
                        </button>
                        <button
                            className="bg-[#1F1F1F] text-[#F15223] lg:w-[656px] sm:w-[300px] w-[200px] h-[56px] rounded-lg hover:opacity-90 transition-opacity"
                        >
                            I Already Have a Wallet
                        </button>
                    </div>
                </div>
            } />
            <Route path="create" element={<CreateWallet />} />
            <Route path="create/backup" element={<BackupWallet />} />
            <Route path="/create/backup/confirm" element={<ConfirmSeedPhrase />} />
            <Route path="/create/backup/confirm/verify" element={<VerifyRecoveryPhrase />} />
        </Routes>
    );
}