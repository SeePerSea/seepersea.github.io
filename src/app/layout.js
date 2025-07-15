import './globals.css'

export const metadata = {
  title: 'SeePerSea Dataset',
  description: 'SeePerSea Dataset from Dartmouth Robotics Lab.',
  keywords: 'Autonomous Surface Vehicles, LiDAR, Camera, Object Detection, Dataset',
  openGraph: {
    title: 'SeePerSea Dataset',
    description: 'SeePerSea Dataset from Dartmouth Robotics Lab.',
    siteName: 'SeePerSea Dataset',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/img/D-Pine_RGB.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=optional" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/academicons@1.9.4/css/academicons.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}