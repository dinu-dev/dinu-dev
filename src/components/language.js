import React from "react"

export default function Language ({ name, level, rate }) {
  return (
    <div className="flex justify-between items-center">
      <div className="text-sm font-normal text-white">{name}</div>
      <div className="text-xs font-normal text-white">{level}</div>
      <div>
        {/* Display 5 dots and fill the rest with empty dots */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-2 h-2 ${i < rate ? '' : 'bg-opacity-50'} rounded-full inline-block ml-1 bg-white`}></div>
        ))}
      </div>
    </div>
  )
}
