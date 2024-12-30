import React, { useState } from 'react';


import eye from '../../assets/eye.svg';
import FarmCard from '../../components/FarmCard';
import StakeCard from '../../components/StakeCard';
import logo from '../../assets/logo.svg';
import usd from '../../assets/usd.svg';
import bnb from '../../assets/bnb.svg';
import busd from '../../assets/busd.svg';
import usdt from '../../assets/usdt.svg';

export default function Home() {
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };
    const topFarms = [
        { pair: "AM-USDC", liquidity: "$3,611,823", apr: "425.85%", isHot: true, token1Image: logo, token2Image: usd },
        { pair: "AM-BNB", liquidity: "$3,611,823", apr: "400.63%", isHot: true, token1Image: logo, token2Image: bnb },
        { pair: "AM-BUSD", liquidity: "$3,611,823", apr: "324.51%", isHot: true, token1Image: logo, token2Image: busd },
        { pair: "AM-USDT", liquidity: "$3,611,823", apr: "205.02%", isHot: true, token1Image: logo, token2Image: usdt },
    ]
    return (
        <div className="bg-black grid gap-12 grid-cols-1 mx-auto container">
            <div className="grid grid-cols-1  lg:grid-cols-3 flex gap-12  ">
                <div className=" w-full h-[131px] flex p-6 flex-col bg-[#141414] rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                        <span>Balance</span>
                        <img src={eye} alt='eye' onClick={toggleBalanceVisibility} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                        {isBalanceVisible ? (
                            <span className="bg-custom-gradient inline-block text-transparent bg-clip-text text-3xl font-semibold">176,127.00</span>
                        ) : (
                            <span className="bg-custom-gradient inline-block text-transparent bg-clip-text text-3xl font-semibold">*******</span>
                        )}
                        <span className="">AM</span>
                    </div>
                </div>

                <div className="w-full h-[131px]  aspect-[4/3] overflow-hidden flex p-6 flex-row bg-[#141414] rounded-lg gap-8">
                    <div className="w-1/2 flex flex-col items-center gap-4 mb-4">
                        <span className='text-xs'>Stake your AM in exchange for even more tokens</span>
                        <button className="bg-custom-gradient text-white rounded-lg px-3 py-1 w-full text-sm">Star Earning Crypto</button>

                    </div>
                    <div className='relative justify-center w-1/2'>

                        <div className='bg-custom-gradient-2 absolute bottom-0 left-0 w-full h-full blur-xl'>

                        </div>
                        <div className='bg-custom-gradient-3 absolute top-0 right-0 w-1/2 h-1/3 blur-xl' >

                        </div>
                        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-4 flex flex-col'>
                            <div className='flex'>
                                <img className='w-[32px]' src={logo} alt="" />
                                <span className='flex items-center'>Earn AM</span>

                            </div>
                            <div>
                                <span>
                                    396.44% APR
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-full h-[131px]  aspect-[4/3] overflow-hidden flex p-6 flex-row bg-[#141414] rounded-lg gap-8">
                    <div className="w-1/2 flex flex-col items-center gap-4 mb-4">
                        <span className='text-xs'>Stake your AM in exchange for even more tokens</span>
                        <button className="bg-custom-gradient text-white rounded-lg px-3 py-1 w-full text-sm">Star Earning Crypto</button>

                    </div>
                    <div className='relative justify-center w-1/2'>

                        <div className='bg-custom-gradient-2 absolute bottom-0 left-0 w-full h-full blur-xl'>

                        </div>
                        <div className='bg-custom-gradient-3 absolute top-0 right-0 w-1/2 h-1/3 blur-xl' >

                        </div>
                        <div className='bg-white/5 backdrop-blur-sm rounded-lg p-4 flex flex-col'>
                            <div className='flex'>
                                <img className='w-[32px]' src={logo} alt="" />
                                <span className='flex items-center'>Earn AM</span>

                            </div>
                            <div>
                                <span>
                                    396.44% APR
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 flex justify-around  ">
                <StakeCard title="Stake AM token to Earn WBNB" apr="122.63%" />
                <StakeCard title="Stake AM token to Earn BUSD" apr="122.63%" />
                <StakeCard title="Stake AM token to Earn USDT" apr="152.12%" />
            </div>


            <div>
                <h2 className="text-xl font-semibold text-white mb-4 ">Top Farms</h2>
                <div className=" grid grid-cols-1  lg:grid-cols-4 flex justify-around  gap-12">
                    {topFarms.map((farm, index) => (
                        <FarmCard
                            key={index}
                            pair={farm.pair}
                            liquidity={farm.liquidity}
                            apr={farm.apr}
                            isHot={farm.isHot}
                            token1Image={farm.token1Image}
                            token2Image={farm.token2Image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}