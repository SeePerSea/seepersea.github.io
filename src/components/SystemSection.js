'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function SystemSection() {
    const systems = [
      { img: '/img/model-asv.png', text: 'Catabot 2 ASV.' },
      { img: '/img/model-humanboat.png', text: 'Human-driven ship equipped with sensors.' },
      { img: '/img/model-catabot1.png', text: 'Catabot 1 ASV.' },
      { img: '/img/model-catabot5.png', text: 'Catabot 5 ASV.' }
    ]
    const [modalImg, setModalImg] = useState(null)
    const [modalAlt, setModalAlt] = useState('')

    const openModal = (img, alt) => {
      setModalImg(img)
      setModalAlt(alt)
    }
    const closeModal = () => setModalImg(null)

    return (
      <div className="system-section-bg">
        <h2 id="system" className="system-section-title">System</h2>
        <div className="system-images-row">
          {systems.map((system, index) => (
            <div key={index} className="system-image-col">
              <div className="system-image-card">
                <Image src={system.img} className="system-image clickable-image" alt={system.text} width={600} height={400} unoptimized onClick={() => openModal(system.img, system.text)} />
                <div className="system-image-caption">{system.text}</div>
              </div>
            </div>
          ))}
        </div>
        {modalImg && (
          <div className="image-modal-overlay" onClick={closeModal}>
            <div className="image-modal-content" onClick={e => e.stopPropagation()}>
              <Image src={modalImg} alt={modalAlt} className="image-modal-img" width={900} height={600} unoptimized />
              <div className="image-modal-caption">{modalAlt}</div>
              <button className="image-modal-close" onClick={closeModal}>&times;</button>
            </div>
          </div>
        )}
      </div>
    )
  }