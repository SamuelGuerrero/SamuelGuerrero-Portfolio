import { NavigationLink } from "../../molecules";
import { ThemeToggle } from "../../atoms";

export const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-end fixed h-20 bg-white dark:bg-black pr-10 shadow-md shadow-black">
      <div className="flex space-x-8 px-20">
        <NavigationLink href="#">Home</NavigationLink>
        <NavigationLink href="#">About</NavigationLink>
        <NavigationLink href="#">Skills</NavigationLink>
        <NavigationLink href="#">Projects</NavigationLink>
        <NavigationLink href="#">Contact</NavigationLink>
      </div>
      <ThemeToggle />
    </nav>
  );
};
