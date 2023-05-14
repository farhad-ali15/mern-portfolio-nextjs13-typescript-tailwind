import "./global.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { aboutMeData, pages, contactMeLinks } from "./data/data";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header name={aboutMeData.name} pages={pages} />
        {children}
        <Footer contactMeLinks={contactMeLinks} />
      </body>
    </html>
  );
}
