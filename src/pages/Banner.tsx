import Link from 'next/link';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner flex justify-center items-center">
      <div className="banner-content">
        <div className="logo-container">
          <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={250}
                height={250}
                className="rounded-md p-2"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
