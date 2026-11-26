


import LeftImageSlider from "./LeftImageSlider "
import RightOffersPanel from "./RightOffersPanel"

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen  w-full grid grid-cols-1 lg:grid-cols-[70%_30%]">
      {/* LEFT SLIDER */}
      <LeftImageSlider />

      {/* RIGHT OFFERS PANEL */}
      <RightOffersPanel />
    </div>
  );
};

export default HomePage;
