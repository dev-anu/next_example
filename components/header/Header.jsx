import "../../styles/globals.css";
import Link from "next/link";
import "../../styles/media.css";
import Logo from "./Logo";
import LeftHeadUnlogged from "./LeftHeadUnlogged";

function Header() {
  return (
    <header>
      <Logo />
      <div className="htext float-left">Vender mi automóvil</div>
      <LeftHeadUnlogged />
    </header>
  );
}

export default Header;
