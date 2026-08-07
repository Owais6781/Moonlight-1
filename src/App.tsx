
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import ScrollToTop from "./Component/ScrollToTop";
import HomeDefault from "./Component/HomeSection/HomeDefault";
import Expertise from "./Component/OurExpertise/Expertise";
import Medical from "./Component/OurExpertise/Medical";
import Recruitment from "./Component/OurExpertise/Recruitment";
import Services from "./Component/OurExpertise/Services";
import Package from "./Component/OurExpertise/Package";
import Ticket from "./Component/OurExpertise/Ticket";
import Attestation from "./Component/OurExpertise/Attestation";
import About from "./Component/About";
import Contact from "./Component/Contact"; 
import HomePage from "./Component/SlideSection/HomePage";
import Privacy from "./Component/privacySections";





const Routing = () => {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route index element={<HomeDefault />} />
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/package" element={<Package />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/attestation" element={<Attestation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        




      </Route>
    </Routes>
  );
};

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <Routing />
  </HashRouter>
);

export default App;



