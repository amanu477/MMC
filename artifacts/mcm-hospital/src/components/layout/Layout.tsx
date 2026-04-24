import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
