import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-28 px-6 lg:px-16 space-y-40">
        {children}
      </main>
      <Footer />
    </>
  );
}
