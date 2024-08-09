import Image from "next/image";
import { Subtitle, Title } from "../atoms";
import { TextEffect } from "../molecules";

export const Header = () => {
  return (
    <section className="relative w-full h-auto mt-20">
      <Image
        src="/Header.webp"
        width={0}
        height={0}
        alt={`Image background`}
        layout="responsive"
        objectFit="cover"
      />
      <div className="w-1/2  left-10 absolute top-1/2 transform -translate-y-1/2 rounded-lg flex">
        <div className="w-full">
          <Title>{"Hi, I'm"}</Title>
          {/* <Title className="text-black mb-20">Samuel Guerrero</Title> */}
          <TextEffect />

          <Subtitle className="">Computer Engineering</Subtitle>
        </div>
        <div>
          <Image
            src={"https://i.postimg.cc/hPH5cmtf/IMG-5077.jpg"}
            width={350}
            height={350}
            alt="Profile image"
            className="rounded-full w-full"
          />
        </div>
      </div>
    </section>
  );
};
