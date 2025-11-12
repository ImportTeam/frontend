import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/LoginHeader";

export const metadata: Metadata = {
  title: "PicSel",
  description: "결제 순간, 당신에게 가장 유리한 선택 - PicSel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans bg-white text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
