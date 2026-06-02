import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        <Suspense fallback={<div className="flex-grow flex items-center justify-center p-8"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>}>
          <Outlet />
        </Suspense>
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}
