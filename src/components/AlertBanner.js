'use client'
import { useState } from 'react'

export default function AlertBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div className="alert-banner">
      <div className="alert-banner-inner alert-banner-green">
        <button className="alert-banner-close" onClick={() => setVisible(false)} aria-label="Close alert">&times;</button>
        <span className="alert-banner-text">
          Final journal acceptance is is completed, and we release the full dataset as it is published. Please check our <a href="https://github.com/dartmouthrobotics/SeePerSea" target="_blank" rel="noopener noreferrer">Github</a> and you can register interest for the complete dataset using the form link at the bottom of this page.
        </span>
      </div>
    </div>
  )
} 