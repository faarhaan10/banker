import type { Metadata } from "next";
import { Inter ,IBM_Plex_Serif} from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] ,variable:'--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"] ,variable:'--font-ibm-plex-serif',weight:['400','700']});

export const metadata: Metadata = {
  title: "Banker",
  description: "Banker is a banking app for everyone!",
  icons: {
    icon:'/icons/logo.svg'
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = {firstName:'Farhan', lastName:'Elias'}
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
