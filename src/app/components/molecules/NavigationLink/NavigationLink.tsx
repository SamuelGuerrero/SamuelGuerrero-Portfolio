"use client";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useState,
} from "react";
import { Paragraph } from "../../atoms/Text";

interface INavigationLink
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
}
export const NavigationLink = ({
  children,
  href,
  ...rest
}: INavigationLink) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex">
      <a
        className="cursor-pointer"
        href={href}
        {...rest}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Paragraph
          className={`bg-clip-text ${
            isHovered
              ? "from-green-400 to-blue-500 text-transparent bg-gradient-to-r dark:from-pink-500 dark:to-yellow-500"
              : "dark:text-white"
          }`}
        >
          {children}
        </Paragraph>
        <div
          className={`h-[2px] ${
            isHovered ? "w-full" : "w-0"
          } duration-300 ease-in-out transition-all bg-gradient-to-tr from-zinc-200 to-sky-600 dark:from-pink-500 dark:to-yellow-500 mx-auto`}
        />
      </a>
    </div>
  );
};
