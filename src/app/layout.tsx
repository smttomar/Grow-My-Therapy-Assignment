import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "DR. MAYA REYNOLDS",
    description: "Anxiety & Trauma Therapy for Adults in Santa Monica, CA",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable}`}>{children}</body>
        </html>
    );
}
