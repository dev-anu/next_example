import Image from "../basicComponents/Image";
import Link from "next/link";

function Logo() {
  return (
    <>
      <div className="mobilemenu"></div>
      <div className="logo float-left">
        <Link href="/">
          <a>
            <Image src="/images/logo.svg" alt="logo" />
          </a>
        </Link>
      </div>
    </>
  );
}

export default Logo;
