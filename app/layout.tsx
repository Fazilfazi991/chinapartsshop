import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "China Parts Shop | Chinese Automotive & Heavy Equipment Spare Parts", description: "Source Genuine, OE, OEM, aftermarket, and replacement parts for Chinese vehicles, trucks, heavy equipment, and machinery. Request a quote from China Parts Shop." };
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
