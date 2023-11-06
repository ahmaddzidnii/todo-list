import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Todo List",
  description: "portofolio ahmad zidni",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-[999999999]">
          <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        </div>
        {children}
      </body>
    </html>
  );
}
