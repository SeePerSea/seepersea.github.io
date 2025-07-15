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
          Final journal acceptance is in progress for this paper, and we will release the full dataset once it is published. In the interim, we have released a <a href="https://github.com/dartmouthrobotics/SeePerSea" target="_blank" rel="noopener noreferrer">sample dataset</a> and you can register interest for the complete dataset using the link at the bottom of this page.
        </span>
      </div>
    </div>
  )
} 