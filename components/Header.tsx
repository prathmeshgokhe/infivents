import Image from "next/image";
import logo from "@/public/Logo/Infinity.png";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="logo-main">
        <Link href="/" className="logo">
          <div className="logo-container">
            <Image sizes="100%" fill src={logo} alt="" />
          </div>
          <h2>infivent</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
