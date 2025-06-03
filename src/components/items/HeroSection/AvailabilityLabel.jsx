
import React from 'react'

const AvailabilityLabel = () => {
  return (
    <div className="w-full text-center mb-6 animate-fade-down">
      <span className="inline-flex items-center gap-2 bg-[var(--grey-002)] px-4 py-2 rounded-full text-sm font-bold text-[var(--grey-006)]">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Available for freelance projects
      </span>
    </div>
  )
}

export default AvailabilityLabel
