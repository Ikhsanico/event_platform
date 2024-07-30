import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import "./globals.css";


const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management",
  icons: {
    icon:'/assets/images/btn_connect_2.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          {children}
          </body>
      </html>
      </ClerkProvider>
    
    
  );
}
