


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import About from "./Component/About";
import Contact from "./Component/Contact"
import Medical from "./Component/OurExpertise/Medical";
import Package from "./Component/OurExpertise/Package";
import Ticket from './Component/OurExpertise/Ticket'
import Attestation from "./Component/OurExpertise/Attestation";
import Recruitment from "./Component/OurExpertise/Recruitment";
import Services from "./Component/OurExpertise/Services";
 import ScrollToTop from "./Component/ScrollToTop";




const Routing = () => {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route index element={<Home view="home" />} />
        <Route element={<Home view="LeftImageSlider" />} />
        <Route element={<Home view="OurExpertise" />} />
        <Route element={<Home view="TrendingDestinations" />} />
        <Route element={<Home view="HowItWorks"/>}/>
        
        <Route element={<Home view="FeaturesSection" />} />

        {/* Services */}
        <Route path="/Expertise" element={<Home view="Expertise" />} />

        <Route path="/Medical" element={<Medical />} />
        <Route path="/Package" element={<Package />} />
        <Route path="/Attestation" element={<Attestation />} />
        <Route path="/Recruitment" element={<Recruitment />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Ticket" element={<Ticket />} />



        {/* personel Details */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       


      </Route>
    </Routes>
  );
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routing />
  </BrowserRouter>
);

export default App;
