'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function SequenceSection() {
    const sequences = [
      { img: '/img/barbados_202302220530.png', text: 'Sea - Barbados 1.' },
      { img: '/img/mascoma_20221012.png', text: 'Lake - Mascoma 1.' },
      { img: '/img/sunapee_20210916.png', text: 'Lake - Sunapee 1.' },
      { img: '/img/busan_20221102.png', text: 'Sea - Busan.' },
      { img: '/img/barbados_202302230946.png', text: 'Sea - Barbados 2.' },
      { img: '/img/mascoma_20221007.png', text: 'Lake - Mascoma 2.' },
      { img: '/img/sunapee_20210827.png', text: 'Lake - Sunapee 2.' }
    ]
    const [modalImg, setModalImg] = useState(null)
    const [modalAlt, setModalAlt] = useState('')

    const openModal = (img, alt) => {
      setModalImg(img)
      setModalAlt(alt)
    }
    const closeModal = () => setModalImg(null)

    return (
      <div className="system-section-bg" id="sequence">
        <h2 className="system-section-title">Sequence</h2>
        <div className="system-images-row">
          {sequences.map((sequence, index) => (
            <div key={index} className="system-image-col">
              <div className="system-image-card">
                <Image src={sequence.img} className="system-image clickable-image" alt={sequence.text} width={600} height={400} unoptimized onClick={() => openModal(sequence.img, sequence.text)} />
                <div className="system-image-caption">{sequence.text}</div>
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