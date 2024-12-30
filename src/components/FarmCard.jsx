import React from 'react'
import PropTypes from 'prop-types'

export default function FarmCard({ pair, liquidity, apr, isHot, token1Image, token2Image }) {
    const [token1, token2] = pair.split('-')

    return (
        <div className="bg-[#141414] rounded-lg p-6 w-full gap-12 h-[274px] ">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={token1Image} alt={token1} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-10 h-10 -ml-4 rounded-full overflow-hidden">
                            <img src={token2Image} alt={token2} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {isHot && (
                    <span className="px-2 py-1 text-xs bg-red-500/10 text-red-500 rounded-full">HOT</span>
                )}
            </div>
            <div className='text-xl mb-2'>
                <span className="text-white font-medium">{pair}</span>

            </div>
            <div className="text-sm text-gray-400 mb-2">
                Liquidity {liquidity}
            </div>
            <div className="flex items-baseline gap-2 mb-4 pt-2">
                <span className="bg-custom-gradient-4 inline-block text-transparent bg-clip-text text-2xl font-semibold">{apr} APR</span>
            </div>
            <button className="w-full py-2 px-4 bg-custom-gradient text-white rounded-lg hover:opacity-90 transition-opacity">
                Farm
            </button>
        </div>
    )
}

FarmCard.propTypes = {
    pair: PropTypes.string.isRequired,
    liquidity: PropTypes.string.isRequired,
    apr: PropTypes.string.isRequired,
    isHot: PropTypes.bool,
    token1Image: PropTypes.string.isRequired,
    token2Image: PropTypes.string.isRequired
}

FarmCard.defaultProps = {
    isHot: false
}

