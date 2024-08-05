import { NavBar } from "./components/organisms";
import { Header } from "./components/templates";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-tr from-zinc-200 to-cyan-50 dark:bg-black">
      <NavBar />
      <Header />
    </main>
  );
}
