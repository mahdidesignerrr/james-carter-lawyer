import type { Metadata, Viewport } from "next";
import "@/presentation/styles/globals.css";

export const viewport: Viewport = {
  themeColor: "#07183d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jamescarterlaw.com"),
  title: "James Carter | Legal Representation You Can Rely On",
  description:
    "Experienced, strategic, and dedicated legal representation in New York. Clear advice and strong advocacy across family, criminal, corporate, real estate, and civil litigation matters.",
  keywords: [
    "James Carter Lawyer",
    "New York Attorney",
    "Family Law",
    "Criminal Defense",
    "Corporate Law",
    "Real Estate Law",
    "Civil Litigation",
  ],
  authors: [{ name: "James Carter" }],
  creator: "James Carter",
  publisher: "Law Offices of James Carter",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamescarterlaw.com",
    title: "James Carter | Legal Representation You Can Rely On",
    description:
      "Experienced, strategic, and dedicated legal representation in New York. 15+ years of trusted courtroom advocacy.",
    siteName: "Law Offices of James Carter",
    images: [
      {
        url: "/assets/images/attorney-portrait.png",
        width: 1200,
        height: 630,
        alt: "James Carter - Principal Attorney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Carter | Legal Representation You Can Rely On",
    description:
      "Experienced, strategic, and dedicated legal representation in New York. 15+ years of trusted courtroom advocacy.",
    images: ["/assets/images/attorney-portrait.png"],
  },
  icons: {
    icon: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#fefefe] text-[#161616] font-sans selection:bg-[#cba05d] selection:text-white">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-[#cba05d] focus:text-white focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
