import CustomCursor from "./components/CustomCursor";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <CustomCursor />
      <MainLayout>
        <Home />
        <About />
        <Events />
        <Team />
        <Contact />
      </MainLayout>
    </>
  );
}
