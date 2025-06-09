import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning Next js",
    template: "%s | Learning Next js",
  },
  description: "Next js",
  keywords: ["Next.js", "React"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} antialiased`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
