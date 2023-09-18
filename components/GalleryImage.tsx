"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

function GalleryImage() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    adaptiveHeight: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div className="rounded-md px-3">
        {/* <Image
          src="/hero.jpeg"
          alt="galery1"
          width={500}
          height={500}
          className="rounded-lg w-full"
        /> */}
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            border: 0,
          }}
        >
          <iframe
            src="https://www.tiktok.com/embed/7278216166827511045"
            style={{
              left: 0,
              width: "100%",
              height: 500,
              position: "relative",
            }}
            allowFullScreen
            scrolling="no"
            allow="encrypted-media;"
          ></iframe>
        </div>
      </div>
      <div className="rounded-md px-3">
        <Image
          src="/hero.jpeg"
          alt="galery1"
          width={500}
          height={500}
          className="rounded-lg w-full"
        />
      </div>
      <div className="rounded-md px-3">
        <Image
          src="/hero.jpeg"
          alt="galery1"
          width={500}
          height={500}
          className="rounded-lg w-full"
        />
      </div>
      <div className="rounded-md px-3">
        <Image
          src="/hero.jpeg"
          alt="galery1"
          width={500}
          height={500}
          className="rounded-lg w-full"
        />
      </div>
    </Slider>
  );
}

export default GalleryImage;

type ArrowProps = {
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

function NextArrow(props: ArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute top-1/2 md:-right-20 -right-0 h-16 w-16 -translate-y-1/2 cursor-pointer"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image
        src="/arrow-right.png"
        alt="arrow-right"
        width={113}
        height={126}
      />
    </div>
  );
}
function PrevArrow(props: ArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute top-1/2 md:-left-20 h-16 w-16 -translate-y-1/2 cursor-pointer z-10"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image
        src="/arrow-right.png"
        alt="arrow-right"
        width={113}
        height={126}
        className="transform rotate-180"
      />
    </div>
  );
}
