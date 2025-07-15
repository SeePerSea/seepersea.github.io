import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer-gutter">
      <div className="footer-content">
        <Image src="/img/D-Pine_RGB.png" alt="Dartmouth Pine Logo" className="footer-logo" width={48} height={48} unoptimized />
        <span className="footer-text">&copy; {new Date().getFullYear()} SeePerSea Dataset &mdash; Dartmouth Reality and Robotics Lab</span>
      </div>
    </footer>
  )
} 