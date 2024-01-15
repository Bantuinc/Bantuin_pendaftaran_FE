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
    align: "center",
    slidesToShow: 1,
    adaptiveHeight: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div>
        <div
          className="rounded-md px-auto flex justify-center items-center h-[768px]"
          style={{ display: "flex !important" }}
        >
          <iframe
            className="w-[853px] h-[480px]"
            src="https://www.youtube.com/embed/AurO1RCq5IM?si=PgEiCidQloyS3ZJx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="rounded-md px-3 h-[768px]">
        <iframe
          src="https://www.tiktok.com/embed/7296434833750756614"
          style={{
            left: 0,
            width: "100%",
            height: 768,
            position: "relative",
          }}
          allowFullScreen
          scrolling="no"
          allow="encrypted-media;"
        ></iframe>
      </div>
      <div className="rounded-md px-3 h-[768px]">
        <iframe
          src="https://www.tiktok.com/embed/7319840869383851269"
          style={{
            left: 0,
            width: "100%",
            height: 768,
            position: "relative",
          }}
          allowFullScreen
          scrolling="no"
          allow="encrypted-media;"
        ></iframe>
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
