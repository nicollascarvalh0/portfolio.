import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Nicz| Portfolio",
  description: "Meu portfólio pessoal feito com Next.js + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
