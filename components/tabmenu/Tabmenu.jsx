import Image from "../../components/basicComponents/Image";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "../../styles/globals.css";
import { useState } from "react";
import CarSide from "./CarSide";
import BrandSide from "./BrandSide";

const settings = {
  loop: true,
  smartSpeed: 1500,
  autoplayTimeout: 3000,
  responsiveClass: true,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    329: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1300: {
      items: 5,
    },
    1600: {
      items: 7,
    },
  },
};
function Tabmenu() {
  const [select, setSelect] = useState(0);
  const handleSelect = (input) => {
    if (input === "cars") {
      setSelect(0);
    }
    if (input === "brands") {
      setSelect(1);
    }
  };
  const link = select === 0 ? "nav-link active" : "nav-link";
  const link1 = select === 1 ? "nav-link active" : "nav-link";
  return (
    <div>
      <div className="bsliderpart">
        <div className="tab-content">
          {select === 0 ? <CarSide /> : <BrandSide />}
        </div>
        <ul className="nav nav-tabs" id="myTab">
          <li className="nav-item">
            <a
              className={link}
              id="cars-tab"
              data-bs-toggle="tab"
              onClick={() => handleSelect("cars")}
            >
              Carrocería
            </a>
          </li>
          <li className="nav-item">
            <a
              htmlfor="brands"
              className={link1}
              id="brands-tab"
              data-bs-toggle="tab"
              onClick={() => handleSelect("brands")}
            >
              Marcas
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tabmenu;
