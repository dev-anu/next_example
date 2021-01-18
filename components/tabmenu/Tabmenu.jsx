import Image from "../../components/basicComponents/Image";

function Tabmenu() {
  return (
    <div>
      <div className="bsliderpart">
        <div className="tab-content">
          <div
            className="tab-pane fade show active commonslider"
            id="cars"
            role="tabpanel"
            aria-labelledby="cars-tab"
          >
            <div id="carslider" className="owl-carousel">
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
            </div>
          </div>
          <div
            className="tab-pane fade commonslider"
            id="brands"
            role="tabpanel"
            aria-labelledby="brands-tab"
          >
            <div id="brandslider" className="owl-carousel">
              <div className="item">
                <div className="imgbox">
                  <Image src="images/b-logo1.png" alt="" />
                  <h4>Toyota</h4>
                </div>
              </div>
              <div className="item">
                <div className="imgbox">
                  <Image src="images/b-logo2.png" alt="" />
                  <h4>Toyota</h4>
                </div>
              </div>
              <div className="item">
                <div className="imgbox">
                  <Image src="images/b-logo3.png" alt="" />
                  <h4>Toyota</h4>
                </div>
              </div>
              <div className="item">
                <div className="imgbox">
                  <Image src="images/b-logo4.png" alt="" />
                  <h4>Toyota</h4>
                </div>
              </div>
              <div className="item">
                <div className="imgbox">
                  <Image src="images/b-logo5.png" alt="" />
                  <h4>Toyota</h4>
                </div>
              </div>
              <div className="item">
                <div className="imgbox">
                  <Image src="images/b-logo6.png" alt="" />
                  <h4>Toyota</h4>
                </div>
              </div>
              <div className="item">
                <div className="imgbox">
                  <Image src="images/b-logo7.png" alt="" />
                  <h4>Toyota</h4>
                </div>
              </div>
              <div className="item">
                <div className="imgbox">
                  <Image src="images/b-logo8.png" alt="" />
                  <h4>Toyota</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="nav nav-tabs" id="myTab">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="cars-tab"
              data-bs-toggle="tab"
              href="#cars"
            >
              Carrocería
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="brands-tab"
              data-bs-toggle="tab"
              href="#brands"
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
