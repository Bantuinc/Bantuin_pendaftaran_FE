"use client";
import Image from "next/image";
import Slider from "react-slick";

function GalleryImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div className="h-[20rem] rounded-md flex items-center justify-center">
        <Image
          src="/hero.jpeg"
          alt="galery1"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="h-[20rem] rounded-md">
        <Image
          src="/hero.jpeg"
          alt="galery1"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="h-[20rem] rounded-md">
        <Image
          src="/hero.jpeg"
          alt="galery1"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="h-[20rem] rounded-md">
        <Image
          src="/hero.jpeg"
          alt="galery1"
          width={500}
          height={500}
          className="rounded-lg"
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
      className="absolute top-1/2 -right-20 h-16 w-16 -translate-y-1/2 cursor-pointer"
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
      className="absolute top-1/2 -left-20 h-16 w-16 -translate-y-1/2 cursor-pointer"
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
