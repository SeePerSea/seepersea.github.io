import Navbar from '@/components/Navbar'
import AlertBanner from '@/components/AlertBanner'
import VideoSection from '@/components/VideoSection'
import SystemSection from '@/components/SystemSection'
import SequenceSection from '@/components/SequenceSection'
import FormatSection from '@/components/FormatSection'
import DownloadSection from '@/components/DownloadSection'
import InfoSection from '@/components/InfoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <AlertBanner />
      <VideoSection />
      <div className="container">
        <InfoSection />
        <SystemSection />
        <SequenceSection />
        <FormatSection />
        <DownloadSection />
      </div>
      <Footer />
    </>
  )
}