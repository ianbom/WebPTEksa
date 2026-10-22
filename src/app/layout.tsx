import type { Metadata } from "next";import "./globals.css";import {Header} from "@/components/Header";import {Footer} from "@/components/Footer";
export const metadata:Metadata={title:{default:"PT Liftco Indo Perkasa | Solusi Material Handling",template:"%s | PT Liftco Indo Perkasa"},description:"Distributor Forklift HELI dan penyedia material handling equipment, lifting equipment, rental, servis dan suku cadang di Indonesia."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body><Header/><main>{children}</main><Footer/></body></html>}
