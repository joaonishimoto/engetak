import "@/app/globals.css";
import Providers from "@/app/providers";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Engetak",
  description: "Generated by Joao Nishimoto",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
