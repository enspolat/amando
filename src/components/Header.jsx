
import React, { useState } from "react"
import WalletModal from './WalletModal'


export default function Header() {
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

    return (
        <header className=" flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">

                <div className="hidden md:flex items-center gap-4 ml-8">
                    <a href="#" className="w-full h-full text-gray-400 hover:text-white">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12.55C1.029 12.545 3.7 11.65 3.7 11.65C0.694 8.61101 0.466 4.11001 2.8 0.850006C3.907 2.90901 5.974 4.80901 8.2 5.35001C8.286 2.75001 10.049 0.850006 12.7 0.850006C14.505 0.850006 15.567 1.53801 16.3 2.65001H19L17.2 5.35001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.795 16.906L9.73001 18.915C9.64811 18.9948 9.54705 19.0521 9.43656 19.0815C9.32608 19.1109 9.20989 19.1113 9.09918 19.0828C8.98847 19.0542 8.88698 18.9977 8.80446 18.9186C8.72194 18.8394 8.66117 18.7404 8.62801 18.631L7.25201 14.101" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.104 10.927L10.187 14.462C10.0942 14.5458 10.0212 14.6493 9.97327 14.7649C9.92538 14.8805 9.90382 15.0052 9.91014 15.1302C9.91645 15.2551 9.9505 15.3771 10.0098 15.4872C10.0691 15.5974 10.1522 15.6929 10.253 15.767L15.631 19.74C15.7527 19.83 15.8951 19.888 16.0451 19.9087C16.1951 19.9294 16.3479 19.912 16.4895 19.8583C16.631 19.8045 16.7568 19.7161 16.8552 19.6011C16.9537 19.486 17.0217 19.3481 17.053 19.2L19.694 6.753C19.723 6.61647 19.7146 6.47465 19.6696 6.34252C19.6247 6.21038 19.5449 6.09283 19.4387 6.00229C19.3325 5.91175 19.2038 5.85157 19.0662 5.82811C18.9286 5.80464 18.7872 5.81877 18.657 5.869L3.14201 11.853C3.04172 11.8913 2.95589 11.96 2.89648 12.0494C2.83707 12.1389 2.80703 12.2446 2.81055 12.3519C2.81407 12.4592 2.85098 12.5627 2.91613 12.6481C2.98128 12.7334 3.07142 12.7963 3.17401 12.828L7.25101 14.1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3H16.504C17.0944 3 17.6791 3.11629 18.2245 3.34224C18.77 3.56818 19.2657 3.89936 19.6832 4.31685C20.1006 4.73434 20.4318 5.22998 20.6578 5.77546C20.8837 6.32094 21 6.90558 21 7.496V16.505C20.9997 17.6972 20.5259 18.8406 19.6828 19.6835C18.8397 20.5265 17.6962 21 16.504 21H7.496C6.30359 21 5.16001 20.5263 4.31685 19.6832C3.47368 18.84 3 17.6964 3 16.504V7.5C3 6.30653 3.47411 5.16193 4.31802 4.31802C5.16193 3.47411 6.30653 3 7.5 3V3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.1 12.9H16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.5 8.40002H15.555C14.8508 8.40002 14.1755 8.67975 13.6776 9.17766C13.1797 9.67557 12.9 10.3509 12.9 11.055V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.22 13.234C15.1706 13.2342 15.1224 13.249 15.0814 13.2766C15.0404 13.3042 15.0085 13.3433 14.9898 13.389C14.971 13.4347 14.9662 13.4849 14.9759 13.5334C14.9857 13.5818 15.0096 13.6263 15.0446 13.6611C15.0796 13.696 15.1241 13.7197 15.1726 13.7293C15.2211 13.7388 15.2713 13.7338 15.3169 13.7149C15.3625 13.6959 15.4015 13.6639 15.4289 13.6228C15.4564 13.5817 15.471 13.5334 15.471 13.484C15.471 13.4511 15.4645 13.4185 15.4519 13.3881C15.4393 13.3577 15.4208 13.3301 15.3974 13.3069C15.3741 13.2836 15.3464 13.2652 15.316 13.2527C15.2855 13.2402 15.2529 13.2339 15.22 13.234" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.73698 13.15C8.68757 13.1502 8.63934 13.165 8.59836 13.1926C8.55738 13.2202 8.52549 13.2593 8.50672 13.305C8.48795 13.3507 8.48314 13.4009 8.4929 13.4494C8.50266 13.4978 8.52655 13.5423 8.56155 13.5771C8.59656 13.612 8.6411 13.6357 8.68957 13.6453C8.73804 13.6548 8.78825 13.6498 8.83388 13.6309C8.8795 13.6119 8.91849 13.5799 8.94591 13.5388C8.97334 13.4977 8.98798 13.4494 8.98798 13.4C8.98798 13.3671 8.98148 13.3345 8.96885 13.3041C8.95622 13.2737 8.93772 13.2461 8.9144 13.2229C8.89108 13.1996 8.8634 13.1812 8.83295 13.1687C8.80251 13.1562 8.76989 13.1499 8.73698 13.15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.054 5.251C18.0887 5.216 18.1162 5.17451 18.1349 5.12888C18.1536 5.08325 18.1631 5.03439 18.1629 4.98509C18.1628 4.93578 18.1529 4.88699 18.1338 4.84151C18.1148 4.79602 18.087 4.75473 18.052 4.72C18.017 4.68526 17.9755 4.65776 17.9298 4.63907C17.8842 4.62037 17.8354 4.61084 17.786 4.61103C17.7367 4.61121 17.688 4.62111 17.6425 4.64015C17.597 4.65919 17.5557 4.687 17.521 4.722C17.4508 4.79268 17.4116 4.88833 17.412 4.98791C17.4124 5.0875 17.4523 5.18285 17.523 5.253C17.5936 5.32315 17.6893 5.36235 17.7889 5.36197C17.8885 5.3616 17.9838 5.32168 18.054 5.251" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.284 16.409C14.231 16.7883 13.1193 16.9789 12 16.972C10.78 16.972 9.68 16.762 8.716 16.409" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.76599 13.814C3.59324 13.7299 3.43303 13.6222 3.28999 13.494C2.90929 13.1221 2.68878 12.6162 2.67536 12.0842C2.66195 11.5521 2.8567 11.0358 3.21816 10.6452C3.57963 10.2545 4.07927 10.0204 4.61077 9.99249C5.14227 9.96463 5.66366 10.1453 6.06399 10.496C7.56299 9.42201 9.65499 8.74001 12 8.74001C14.345 8.74001 16.437 9.42201 17.936 10.495C18.3335 10.1272 18.861 9.93229 19.4022 9.9533C19.9434 9.9743 20.4541 10.2094 20.822 10.607C21.1898 11.0046 21.3847 11.532 21.3637 12.0732C21.3427 12.6144 21.1075 13.1252 20.71 13.493C20.57 13.625 20.405 13.726 20.234 13.813C20.274 14.039 20.301 14.267 20.301 14.498C20.301 17.59 16.641 20.257 12 20.257C7.35899 20.257 3.69899 17.59 3.69899 14.498C3.69899 14.267 3.72599 14.039 3.76599 13.814V13.814Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 8.74L12.629 5.935C12.7434 5.4251 13.0529 4.98024 13.4911 4.69561C13.9294 4.41097 14.4616 4.30918 14.974 4.412L17.429 4.904" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                    <a href="#" className="text-gray-400 hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.583 6.37299C21.354 5.36899 20.676 4.57699 19.814 4.30499C18.255 3.81799 12 3.81799 12 3.81799C12 3.81799 5.748 3.81799 4.186 4.30499C3.327 4.57299 2.649 5.36499 2.417 6.37299C2 8.19499 2 12 2 12C2 12 2 15.805 2.417 17.627C2.646 18.631 3.324 19.423 4.186 19.695C5.748 20.182 12 20.182 12 20.182C12 20.182 18.255 20.182 19.814 19.695C20.673 19.427 21.351 18.635 21.583 17.627C22 15.805 22 12 22 12C22 12 22 8.19499 21.583 6.37299Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.002 15L15.198 12L10.002 9V15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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

                <button onClick={() => setIsWalletModalOpen(true)}
                    className="px-4 py-2 text-sm font-medium text-white bg-custom-gradient rounded-lg hover:bg-purple-700">
                    Connect Wallet
                </button>

                <button className="text-gray-400 hover:text-white ">
                    <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="40" rx="12" fill="#1F1F1F" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6599 16.0357C23.966 15.943 24.2981 16.0356 24.5121 16.2732C24.7262 16.5108 24.7837 16.8507 24.6597 17.1455C23.8698 18.9201 24.255 20.9978 25.6285 22.3713C27.002 23.7448 29.0798 24.1299 30.8544 23.34C31.1492 23.216 31.489 23.2735 31.7267 23.4876C31.9643 23.7016 32.0568 24.0337 31.9642 24.3398C31.0291 27.353 28.1016 29.2912 24.9624 28.9753C21.8233 28.6593 19.3406 26.1767 19.0246 23.0376C18.7086 19.8984 20.6467 16.9709 23.6599 16.0357Z" stroke="#F15223" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9527 15.8271C34.0615 15.6246 34.2728 15.4982 34.5026 15.4982C34.7325 15.4982 34.9437 15.6246 35.0525 15.8271L35.5375 16.7146C35.5949 16.8202 35.6816 16.9069 35.7871 16.9643L36.6747 17.4493C36.8772 17.558 37.0035 17.7693 37.0035 17.9992C37.0035 18.229 36.8772 18.4403 36.6747 18.549L35.7871 19.034C35.6816 19.0915 35.5949 19.1782 35.5375 19.2837L35.0525 20.1712C34.9437 20.3737 34.7325 20.5001 34.5026 20.5001C34.2728 20.5001 34.0615 20.3737 33.9527 20.1712L33.4678 19.2837C33.4103 19.1782 33.3236 19.0915 33.2181 19.034L32.3306 18.549C32.1281 18.4403 32.0017 18.229 32.0017 17.9992C32.0017 17.7693 32.1281 17.558 32.3306 17.4493L33.2181 16.9643C33.3236 16.9069 33.4103 16.8202 33.4678 16.7146L33.9527 15.8271Z" stroke="#F15223" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5605 11.2594C28.6475 11.0974 28.8165 10.9963 29.0004 10.9963C29.1843 10.9963 29.3533 11.0974 29.4403 11.2594L29.8283 11.9695C29.8742 12.0539 29.9436 12.1232 30.028 12.1692L30.738 12.5572C30.9 12.6442 31.0011 12.8132 31.0011 12.9971C31.0011 13.181 30.9 13.35 30.738 13.437L30.028 13.825C29.9436 13.8709 29.8742 13.9403 29.8283 14.0247L29.4403 14.7347C29.3533 14.8967 29.1843 14.9978 29.0004 14.9978C28.8165 14.9978 28.6475 14.8967 28.5605 14.7347L28.1725 14.0247C28.1265 13.9403 28.0572 13.8709 27.9728 13.825L27.2627 13.437C27.1007 13.35 26.9996 13.181 26.9996 12.9971C26.9996 12.8132 27.1007 12.6442 27.2627 12.5572L27.9728 12.1692C28.0572 12.1232 28.1265 12.0539 28.1725 11.9695L28.5605 11.2594Z" stroke="#F15223" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>


                <div class="h-[40px] bg-[#333333] w-px "></div>


                <button>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.66663 9.33333H29.3333V22.6667H2.66663V9.33333Z" fill="#012169" />
                        <path d="M2.66663 9.33333V10.8229L26.3515 22.6667H29.3333V21.1771L5.6484 9.33333H2.66663ZM29.3333 9.33333V10.8229L5.6484 22.6667H2.66663V21.1771L26.3515 9.33333H29.3333Z" fill="white" />
                        <path d="M13.7786 9.33333V22.6667H18.2213V9.33333H13.7786ZM2.66663 13.7786V18.2213H29.3333V13.7786H2.66663Z" fill="white" />
                        <path d="M2.66663 14.6667V17.3333H29.3333V14.6667H2.66663ZM14.6666 9.33333V22.6667H17.3333V9.33333H14.6666ZM2.66663 22.6667L11.5546 18.2213H13.5442L4.65361 22.6667H2.66663ZM2.66663 9.33333L11.5546 13.7786H9.56767L2.66663 10.3281V9.33333ZM18.4583 13.7786L27.3463 9.33333H29.3333L20.4453 13.7786H18.4583ZM29.3333 22.6667L20.4453 18.2213H22.4323L29.3333 21.6719V22.6667Z" fill="#C8102E" />
                    </svg>

                </button>
            </div>


            <WalletModal
                isOpen={isWalletModalOpen}
                onClose={() => setIsWalletModalOpen(false)}
            />
        </header>
    )
}

