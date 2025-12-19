import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <MainLayout>
      <Home />
      <About />
      <Events />
      <Team />
      <Contact />
    </MainLayout>
  );
};

export default App;
