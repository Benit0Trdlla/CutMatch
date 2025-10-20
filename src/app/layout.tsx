import type { Metadata } from "next";
import { Toaster } from 'sonner'
import "./globals.css";


export const metadata: Metadata = {
  title: "CutMatch | El corte que encaja contigo.",
  description: "CutMatch tu ayuda a encontrar el mejor corte de pelo según la forma de tu cara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased bg-black text-white`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
