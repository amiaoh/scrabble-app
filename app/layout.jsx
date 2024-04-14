import { NavigationBar } from "@/components/NavigationBar";
import { SearchHistory } from "@/components/SearchHistory";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scrabble Solver App",
  description: "Find the best words for your Scrabble game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
