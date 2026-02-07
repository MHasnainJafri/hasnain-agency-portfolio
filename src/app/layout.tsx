import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mhasnainjafri.com"),
  title: {
    default: "Muhammad Hasnain | AI & Full Stack Developer | CEO at Anssol",
    template: "%s | Muhammad Hasnain",
  },
  description:
    "Muhammad Hasnain - CEO of Anssol, AI & Full Stack Developer with 4+ years experience in Gen AI, Machine Learning, Laravel, React.js. Building AI Agents, SaaS solutions, and scalable web applications.",
  keywords: [
    "Muhammad Hasnain",
    "AI Developer",
    "Full Stack Developer",
    "Gen AI",
    "Machine Learning",
    "Laravel Developer",
    "React Developer",
    "Anssol",
    "AI Agents",
    "SaaS Development",
    "Web Development",
    "Mobile App Development",
    "Pakistan Developer",
    "Freelance Developer",
    "Upwork",
    "Fiverr",
  ],
  authors: [{ name: "Muhammad Hasnain", url: "https://mhasnainjafri.com" }],
  creator: "Muhammad Hasnain",
  publisher: "Muhammad Hasnain",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mhasnainjafri.com",
    siteName: "Muhammad Hasnain Portfolio",
    title: "Muhammad Hasnain | AI & Full Stack Developer | CEO at Anssol",
    description:
      "CEO of Anssol, AI & Full Stack Developer with 4+ years experience in Gen AI, Machine Learning, Laravel, React.js. Building AI Agents, SaaS solutions, and scalable web applications.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Hasnain - AI & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hasnain | AI & Full Stack Developer | CEO at Anssol",
    description:
      "CEO of Anssol, AI & Full Stack Developer with 4+ years experience in Gen AI, Machine Learning, Laravel, React.js.",
    images: ["/og-image.jpg"],
    creator: "@mhasnainjafri",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://mhasnainjafri.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#14A800" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Hasnain",
              url: "https://mhasnainjafri.com",
              image: "/portrait.jpg",
              jobTitle: "AI & Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Anssol",
                url: "https://anssol.com",
              },
              sameAs: [
                "https://linkedin.com/in/mhasnainjafri",
                "https://github.com/MHasnainJafri",
                "https://www.upwork.com/freelancers/~017303523ed7fc4024",
                "https://www.fiverr.com/s/qDXV4dV",
              ],
              email: "eng.muhammadhasnain@gmail.com",
              telephone: "+923071606798",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rawalpindi",
                addressRegion: "Punjab",
                addressCountry: "Pakistan",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Full Stack Development",
                "Laravel",
                "React.js",
                "Python",
                "Gen AI",
                "AI Agents",
                "SaaS Development",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
