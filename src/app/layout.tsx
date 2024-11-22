// import type { Metadata } from "next";
import "./globals.css";

// Fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     metadataBase: new URL("http://front.com"),
//     title: `Front`,
//     description: `Front`
// };

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <head>
                {/* Favicon and other meta tags */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                <meta name="theme-color" content="#000" />
                <meta property="og:image" content="/assets/logo.png" />
                <meta property="twitter:title" content="Front" />
                <meta property="twitter:description" content="Front" />
                <meta property="twitter:image" content="/assets/logo.png" />
                <meta property="twitter:card" content="/assets/logo.png" />
                <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            </head>
            {/* Body with header and footer */}
            <body className={`${inter.className} flex h-full flex-col`}>
                <main className="flex-grow">{children}</main>
            </body>
        </html>
    );
}
