import { Roboto_Mono } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const robotoMono = Roboto_Mono({ weight: ["500"], subsets: ["cyrillic"] });

interface IParagraph
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const Paragraph = ({ children, className, ...rest }: IParagraph) => {
  return (
    <h1 style={robotoMono.style} {...rest} className={`font-bold text-black text-xl ${className}`}>
      {children}
    </h1>
  );
};
