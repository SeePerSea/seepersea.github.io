'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShip, faMap, faFile, faDownload, faUniversity, faBars } from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  { href: '#seepersea', label: 'Home', icon: faHome },
  { href: '#system', label: 'System', icon: faShip },
  { href: '#sequence', label: 'Sequence', icon: faMap },
  { href: '#format', label: 'Format', icon: faFile },
  { href: '#download', label: 'Download', icon: faDownload },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    if (href === '#seepersea') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href === '#download') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    } else {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="navbar custom-navbar navbar-margin">
      <div className="navbar-brand">
        <a href="#seepersea" className="brand-link" onClick={e => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          SeePerSea Dataset
        </a>
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <ul className={`navbar-links${isOpen ? ' open' : ''}`}>
        {navLinks.map(({ href, label, icon }) => (
          <li key={href} className="navbar-link-item">
            <a
              href={href}
              className="navbar-link"
              onClick={e => handleNavClick(e, href)}
            >
              {icon && <FontAwesomeIcon icon={icon} className="navbar-link-icon" />} {label}
            </a>
          </li>
        ))}
        <li className="navbar-link-item">
          <a
            href="https://rlab.cs.dartmouth.edu/"
            className="navbar-link"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faUniversity} className="navbar-link-icon" /> RLab@dartmouth
          </a>
        </li>
      </ul>
    </nav>
  )
}