import Providers from "@/app/providers";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster"
import App from "@/components/layout/App";

export const metadata = {
  title: "Engetak",
  description: "Generated by Joao Nishimoto",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <div>
      <Providers>
        <App>
          <div className="bg-teal-50">
            {props.children}
            <Toaster />
          </div>
        </App>
      </Providers>
    </div>
  )
}
