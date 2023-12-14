import { Montserrat } from "next/font/google";
import "@/styles/globals.scss";
import ReduxProvider from "@/redux/Provider";
import Header from "@/components/Header/Header";

const inter = Montserrat({ subsets: ["latin"], display: "fallback" });

export const metadata = {
  title: "FiVe | Find your vehicle",
  description: "FiVe | Find your vehicle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
