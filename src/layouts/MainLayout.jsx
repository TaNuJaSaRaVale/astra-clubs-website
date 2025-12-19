import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 md:px-16 py-10">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
