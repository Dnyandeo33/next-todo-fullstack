import { Providers } from "@/provider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo list",
  description: "fullstack todo list app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </Providers>
      </body>

    </html>
  );
}
