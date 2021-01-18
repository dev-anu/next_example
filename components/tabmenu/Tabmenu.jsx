import Image from "../../components/basicComponents/Image";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "../../styles/globals.css";
import { useRef, useState } from "react";
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
  const counterEl = useRef(null);
  const first = useRef(null);
  const [select, setSelect] = useState(0);
  const handleSelect = (input) => {
    if (input === "cars") {
      setSelect(0);
    }
    if (input === "brands") {
      setSelect(1);
    }
  };
  return (
    <div>
      <div className="bsliderpart">
        <div className="tab-content">
          {select === 0 ? <CarSide /> : <BrandSide />}
        </div>
        <ul className="nav nav-tabs" id="myTab">
          <li className="nav-item">
            <a
              className="nav-link active"
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
              className="nav-link"
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
