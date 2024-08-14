import Navbar from './components/Navbar';
import './globals.css';

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <title>DigPatho</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
