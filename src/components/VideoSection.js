'use client'

export default function VideoSection() {
  return (
    <div className="video-section">
      <div className="video-responsive">
        <iframe
          className="iframe-container"
          src="https://www.youtube.com/embed/vKewY-BHckk?si=LO88Q3XMbOoxkVfK"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <h1 className="video-caption">
        Welcome to the SeePerSea Dataset from the Dartmouth Reality and Robotics Lab!
      </h1>
    </div>
  )
}