import React, { useRef } from "react";

const ImageScroll = () => {
  const scrollRef = useRef(null);

  const images = [
    "lady.png",
    "monsterStein.png",
    "ripe.png",
    "l'odysée.png",
    "trois-mousquetaires.png",
    "seuls.jpg",
  ];

  const images2 = [
    "allMyFriendAreGhosts.png",
    "holly.png",
    "1984.png",
    "petit-prince.png",
    "voyages-extraordianaires.png",
    "en_attendant_Bojangles.png",
  ];

  const images3 = [
    "sakamoto.png",
    "SunnyPlaceForShadyPeaple.png",
    "theSpeaker.png",
    "theThingWeDoTo.png",
    "womanLore.png",
    "la-vie-devant-soi.jpg",
  ];

  const images4 = [
    "asterix.png",
    "le-cid.png",
    "lotr.png",
    "op.png",
    "oliver-twist.png",
    "l-alchimiste.jpg",
  ];

  const imagesList = [...images, ...images, ...images, ...images];
  const imagesList2 = [...images2, ...images2, ...images2, ...images2];
  const imagesList3 = [...images3, ...images3, ...images3, ...images3];
  const imagesList4 = [...images4, ...images4, ...images4, ...images4];

  return (
    <div className="flex flex-col relative mt-[50px] mb-[50px]">
      {/* Scroll Container Left */}
      <div className=" scroll-container">
        <div className="scroll-wrapper animate-scrollLeft" ref={scrollRef}>
          {imagesList.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/scroll-images/${image}`}
              alt={`Scroll ${index}`}
              className="img-scroll"
            />
          ))}
        </div>
        <span className="text-overflow">
          Unis
        </span>
      </div>

      {/* Scroll Container Right */}
      <div className=" scroll-container">
        <div className="scroll-wrapper animate-scrollRight" ref={scrollRef}>
          {imagesList2.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/scroll-images/${image}`}
              alt={`Scroll ${index}`}
              className="img-scroll"
            />
          ))}
        </div>
        <span className="text-overflow left-[70%] ">
          par
        </span>
      </div>

      {/* Scroll Container Left */}
      <div className=" scroll-container">
        <div className="scroll-wrapper animate-scrollLeft" ref={scrollRef}>
          {imagesList3.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/scroll-images/${image}`}
              alt={`Scroll ${index}`}
              className="img-scroll"
            />
          ))}
        </div>
        <span className="text-overflow left-[20%]">
          la
        </span>
      </div>

      {/* Scroll Container Right */}
      <div className="scroll-container">
        <div className="scroll-wrapper animate-scrollRight" ref={scrollRef}>
          {imagesList4.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/scroll-images/${image}`}
              alt={`Scroll ${index}`}
              className="img-scroll"
            />
          ))}
        </div>
        <span className=" text-overflow left-[70%]">
          passion
        </span>
      </div>
    </div>
  );
};

export default ImageScroll;
