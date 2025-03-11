import { CartProvider } from "./components/cards/CartContext";
import Header from "./components/header/Header";
import Footer from "./components/reuseableComponent/Footer";
import Preloader from "./components/reuseableComponent/Preloader";
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
      <CartProvider>
      <body className="flex flex-col min-h-screen">
      <Preloader /> 
        <Header />
        <main className="flex-grow"> {children}</main>
        <Footer/>
      </body>
      </CartProvider>
    </html>
  );
}
