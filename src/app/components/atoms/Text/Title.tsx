import { Roboto_Mono } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const robotoMono = Roboto_Mono({ weight: ["500"], subsets: ["cyrillic"] });

interface ITitle
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const Title = ({ children, className, ...rest }: ITitle) => {
  return (
    <h1
      style={robotoMono.style}
      {...rest}
      className={`font-bold text-7xl ${className}`}
    >
      {children}
    </h1>
  );
};
