import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'RIIB Fashion - Premium Nigerian Fashion',
  description: 'Discover premium Nigerian fashion with RIIB - handcrafted garments that blend traditional craftsmanship with contemporary style',
  icons: {
    icon: [
      { url: '/assets/images/RIIBFOREVER_Label-removebg-preview-1766536133535.png', type: 'image/png' }
    ],
    apple: [
      { url: '/assets/images/RIIBFOREVER_Label-removebg-preview-1766536133535.png' }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Friibfashi4436back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.12" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}