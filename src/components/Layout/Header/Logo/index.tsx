import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo2.png"
        alt="logo"
        width={128}
        height={80}
        style={{ width: "auto", height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
