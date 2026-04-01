import type { Metadata } from "next";
import { Lato, Lora } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { img } from "@/lib/prefix";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Nrvana Literature | Poetry and stories for our place and time",
  description: "Poetry and stories for our place and time. By Falcon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-foreground">
        {/* Header */}
        <header className="border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <Link href="/">
              <img
                src={img("/images/logo-gold.png")}
                alt="Nrvana Literature"
                width={320}
                height={320}
                className="mx-auto"
              />
            </Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-border py-8 text-center text-muted text-xs">
          &copy; {new Date().getFullYear()} Nrvana Literature
        </footer>
      </body>
    </html>
  );
}
