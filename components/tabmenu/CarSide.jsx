import Image from "../../components/basicComponents/Image";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "../../styles/globals.css";
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

const CarSide = () => (
  <div
    className="tab-pane fade show active commonslider"
    id="cars"
    role="tabpanel"
    aria-labelledby="cars-tab"
  >
    <OwlCarousel
      nav
      {...settings}
      autoplay
      id="carslider"
      className="owl-carousel"
    >
      <div className="item">
        <div className="imgbox">
          <Image src="images/car-img1.png" alt="" />
          <h4>Sedán</h4>
        </div>
      </div>
      <div className="item">
        <div className="imgbox">
          <Image src="images/car-img2.png" alt="" />
          <h4>Sedán</h4>
        </div>
      </div>
      <div className="item">
        <div className="imgbox">
          <Image src="images/car-img3.png" alt="" />
          <h4>Sedán</h4>
        </div>
      </div>
      <div className="item">
        <div className="imgbox">
          <Image src="images/car-img4.png" alt="" />
          <h4>Sedán</h4>
        </div>
      </div>
      <div className="item">
        <div className="imgbox">
          <Image src="images/car-img5.png" alt="" />
          <h4>Sedán</h4>
        </div>
      </div>
      <div className="item">
        <div className="imgbox">
          <Image src="images/car-img6.png" alt="" />
          <h4>Sedán</h4>
        </div>
      </div>
      <div className="item">
        <div className="imgbox">
          <Image src="images/car-img7.png" alt="" />
          <h4>Sedán</h4>
        </div>
      </div>
    </OwlCarousel>
  </div>
);

export default CarSide;
