"use client";
import { TypewriterEffect } from "../../ui/typewriter-effect";

export const TextEffect = () => {
  const words = [
    {
      text: "Samuel",
      className: "font-bold text-7xl text-black",
    },
    {
      text: "Guerrero",
      className: "font-bold text-7xl",
    },
  ];
  return (
    <div className="mb-20 flex flex-col items-center justify-center">
      <TypewriterEffect words={words} />
    </div>
  );
}
