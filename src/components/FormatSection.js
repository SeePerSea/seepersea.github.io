'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function FormatSection() {
    const [modalImg, setModalImg] = useState(null)
    const [modalAlt, setModalAlt] = useState('')
    const openModal = (img, alt) => {
      setModalImg(img)
      setModalAlt(alt)
    }
    const closeModal = () => setModalImg(null)
    return (
      <div className="system-section-bg" id="format">
        <h2 className="system-section-title">Format</h2>
        <div className="system-images-row">
          <div className="system-image-col format-image-col-full">
            <div className="system-image-card">
              <Image src="/img/t-fr-folder-structure-with-data.png" className="system-image clickable-image" alt="Folder structure" width={600} height={400} unoptimized onClick={() => openModal('/img/t-fr-folder-structure-with-data.png', 'Folder structure of the dataset')} />
              <div className="system-image-caption">Folder structure of the dataset</div>
            </div>
          </div>
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
        <div className="format-section-bottom-text">
          To view a sample of the dataset, please visit our{' '}
          <a href="https://github.com/dartmouthrobotics/SeePerSea" style={{ color: '#b6e2c2', textDecoration: 'underline' }}>GitHub repo</a>.
        </div>
      </div>
    )
  }