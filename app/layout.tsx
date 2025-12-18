import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/providers";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Next WP Blog",
  description: "SEO Friendly Blog using Next.js & WordPress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
