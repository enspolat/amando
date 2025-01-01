import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function WalletBreadcrumb() {
    const location = useLocation();
    const navigate = useNavigate();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const breadcrumbNameMap = {
        wallet: 'Wallet',
        create: 'Create a New Wallet',
        backup: 'Back Up Your Wallet',
        confirm: 'Confirm Your Seed Phrase',
        verify: 'Verify Recovery Phrase'
    };

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        return {
            name: breadcrumbNameMap[segment] || segment,
            path: path
        };
    });

    return (
        <div className="fixed top-20 left-0 right-0 z-10">
            <div className="flex items-center h-14 px-4  lg:pl-72">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-[#1F1F1F] rounded-lg transition-colors mr-3"
                >
                    <ChevronLeftIcon className="w-5 h-5 text-gray-400" />
                </button>

                <div className="flex items-center gap-2 text-gray-400">
                    {breadcrumbs.map((item, index) => (
                        <div key={item.path} className="flex items-center">
                            {index === breadcrumbs.length - 1 ? (
                                <span className="text-white text-sm">{item.name}</span>
                            ) : (
                                <>
                                    <Link
                                        to={item.path}
                                        className="hover:text-white transition-colors text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                    <span className="mx-2 text-sm">/</span>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 