import 'assets/css/reset.css';
import 'tailwindcss/tailwind.css';
import 'assets/css/global.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
