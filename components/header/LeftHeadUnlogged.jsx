import Link from "next/link";

function LeftHeadUnlogged() {
  return (
    <div className="rheader float-right">
      <Link href="/">
        <a className="float-left ingbtn">Ingresar</a>
      </Link>
      <Link href="/">
        <a className="float-left cbtn">Crear cuenta</a>
      </Link>
    </div>
  );
}

export default LeftHeadUnlogged;
