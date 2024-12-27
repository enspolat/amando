import { Bell, Globe, Moon } from 'lucide-react'

export default function Header() {
    return (
        <header className=" flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
            <div className="flex items-center gap-2">

                <div className="hidden md:flex items-center gap-4 ml-8">
                    <a href="#" className="text-gray-400 hover:text-white">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12.55C1.029 12.545 3.7 11.65 3.7 11.65C0.694 8.61101 0.466 4.11001 2.8 0.850006C3.907 2.90901 5.974 4.80901 8.2 5.35001C8.286 2.75001 10.049 0.850006 12.7 0.850006C14.505 0.850006 15.567 1.53801 16.3 2.65001H19L17.2 5.35001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-white ">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3315 26.4154H14.1654" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.7577 13.4379V13.3962C22.7577 11.6698 22.0719 10.0141 20.8511 8.79327C19.6303 7.57249 17.9745 6.88666 16.2481 6.88666C14.5216 6.88666 12.8659 7.57249 11.6451 8.79327C10.4243 10.0141 9.73851 11.6698 9.73851 13.3962V16.6562C9.73841 16.8627 9.68088 17.0651 9.57236 17.2408C9.46384 17.4164 9.3086 17.5584 9.124 17.6509L8.46914 17.9777C7.98228 18.2206 7.59177 18.6208 7.36094 19.1135C7.13011 19.6062 7.0725 20.1624 7.19746 20.6919C7.32242 21.2215 7.62262 21.6933 8.04936 22.0308C8.4761 22.3683 9.00435 22.5517 9.54843 22.5513H22.9478C23.2735 22.7143 23.6318 22.8015 23.996 22.8063C24.3602 22.8111 24.7207 22.7335 25.0506 22.5792C25.3805 22.4248 25.6712 22.1979 25.9009 21.9153C26.1307 21.6327 26.2935 21.3017 26.3771 20.9473C26.4608 20.5928 26.4632 20.224 26.3841 19.8685C26.305 19.513 26.1464 19.18 25.9204 18.8945C25.6943 18.6089 25.4065 18.3782 25.0786 18.2197C24.7508 18.0612 24.3913 17.9789 24.0271 17.979L23.3722 17.6522C23.1876 17.5594 23.0324 17.4171 22.9239 17.2413C22.8154 17.0654 22.7578 16.8629 22.7577 16.6562V13.4379V13.4379Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button className="text-gray-400 hover:text-white ">
                    <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="40" rx="12" fill="#1F1F1F" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6599 16.0357C23.966 15.943 24.2981 16.0356 24.5121 16.2732C24.7262 16.5108 24.7837 16.8507 24.6597 17.1455C23.8698 18.9201 24.255 20.9978 25.6285 22.3713C27.002 23.7448 29.0798 24.1299 30.8544 23.34C31.1492 23.216 31.489 23.2735 31.7267 23.4876C31.9643 23.7016 32.0568 24.0337 31.9642 24.3398C31.0291 27.353 28.1016 29.2912 24.9624 28.9753C21.8233 28.6593 19.3406 26.1767 19.0246 23.0376C18.7086 19.8984 20.6467 16.9709 23.6599 16.0357Z" stroke="#F15223" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9527 15.8271C34.0615 15.6246 34.2728 15.4982 34.5026 15.4982C34.7325 15.4982 34.9437 15.6246 35.0525 15.8271L35.5375 16.7146C35.5949 16.8202 35.6816 16.9069 35.7871 16.9643L36.6747 17.4493C36.8772 17.558 37.0035 17.7693 37.0035 17.9992C37.0035 18.229 36.8772 18.4403 36.6747 18.549L35.7871 19.034C35.6816 19.0915 35.5949 19.1782 35.5375 19.2837L35.0525 20.1712C34.9437 20.3737 34.7325 20.5001 34.5026 20.5001C34.2728 20.5001 34.0615 20.3737 33.9527 20.1712L33.4678 19.2837C33.4103 19.1782 33.3236 19.0915 33.2181 19.034L32.3306 18.549C32.1281 18.4403 32.0017 18.229 32.0017 17.9992C32.0017 17.7693 32.1281 17.558 32.3306 17.4493L33.2181 16.9643C33.3236 16.9069 33.4103 16.8202 33.4678 16.7146L33.9527 15.8271Z" stroke="#F15223" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5605 11.2594C28.6475 11.0974 28.8165 10.9963 29.0004 10.9963C29.1843 10.9963 29.3533 11.0974 29.4403 11.2594L29.8283 11.9695C29.8742 12.0539 29.9436 12.1232 30.028 12.1692L30.738 12.5572C30.9 12.6442 31.0011 12.8132 31.0011 12.9971C31.0011 13.181 30.9 13.35 30.738 13.437L30.028 13.825C29.9436 13.8709 29.8742 13.9403 29.8283 14.0247L29.4403 14.7347C29.3533 14.8967 29.1843 14.9978 29.0004 14.9978C28.8165 14.9978 28.6475 14.8967 28.5605 14.7347L28.1725 14.0247C28.1265 13.9403 28.0572 13.8709 27.9728 13.825L27.2627 13.437C27.1007 13.35 26.9996 13.181 26.9996 12.9971C26.9996 12.8132 27.1007 12.6442 27.2627 12.5572L27.9728 12.1692C28.0572 12.1232 28.1265 12.0539 28.1725 11.9695L28.5605 11.2594Z" stroke="#F15223" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>


                <button className="p-2 text-gray-400 hover:text-white">
                    <Moon className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-custom-gradient rounded-lg hover:bg-purple-700">
                    Connect Wallet
                </button>
            </div>
        </header>
    )
}

