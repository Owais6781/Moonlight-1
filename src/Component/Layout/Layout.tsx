

import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TopHeader from "./Topheader";
import HomePage from "../SlideSection/HomePage";

const Layout = () => {
  const location = useLocation();

  const hideSliderRoutes = [
    "/about",
    "/contact",
    "/Expertise",
    "/medical",
    "/Services",
    "/Package",
    "/Attestation",
    "/Recruitment",
    "/Ticket",
  ];
  const shouldShowSlider = !hideSliderRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <TopHeader />
      <Header />

      {/* Add padding-top to offset fixed headers */}
      <main className="flex-1 w-full pt-28">
        {shouldShowSlider && <HomePage />}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
