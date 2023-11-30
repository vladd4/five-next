import { Montserrat } from "next/font/google";
import "@/styles/globals.scss";
import { Suspense } from "react";
import Loading from "./loading";
import ReduxProvider from "@/redux/Provider";

const inter = Montserrat({ subsets: ["latin"], display: "fallback" });

export const metadata = {
  title: "FiVe | Find your vehicle",
  description: "FiVe | Find your vehicle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
