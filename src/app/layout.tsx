import Header from "./components/header/Header";
import Footer from "./components/reuseableComponent/Footer";
import "./globals.css";

export const metadata = {
  title: "E-commerce",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow"> {children}</main>
        <Footer/>
      </body>
    </html>
  );
}
