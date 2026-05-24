import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  description: "Refa",
  title: "Portofolio Refa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F6F8F2] text-[#2F3A2F] font-sans">

        <Navbar />

        <main>
          {children}
        </main>

        <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Refa’s Portfolio
          </p>
        </footer>

      </body>
    </html>
  );
}