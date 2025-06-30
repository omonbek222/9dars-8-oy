import "./globals.css";

export const metadata = {
  title: "ShadCN Docs Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white">
        {children}
      </body>
    </html>
  );
}
