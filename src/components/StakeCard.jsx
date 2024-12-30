import React from 'react'
import PropTypes from 'prop-types'

export default function StakeCard({ title, apr }) {
    return (
        <div className="bg-[#141414] rounded-lg p-6 w-full h-[210px] justify-around flex flex-col">
            <h3 className=" mb-4">{title}</h3>
            <div className="flex items-baseline gap-2 mb-4">
                <span className="bg-custom-gradient inline-block text-transparent bg-clip-text text-3xl font-semibold">{apr} APR</span>
            </div>
            <button className="w-full py-2 px-4 bg-[#1F1F1F] text-[#F15223] font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Start Jungle
            </button>
        </div>
    )
}

StakeCard.propTypes = {
    title: PropTypes.string.isRequired,
    apr: PropTypes.string.isRequired
}

