import { Roboto_Mono } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const robotoMono = Roboto_Mono({ weight: ["500"], subsets: ["cyrillic"] });

interface ISubtitle
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const Subtitle = ({ children, className, ...rest }: ISubtitle) => {
  return (
    <h1 style={robotoMono.style} {...rest} className={`font-bold text-black text-xl ${className}`}>
      {children}
    </h1>
  );
};
