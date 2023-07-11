import Overlay from "@/components/Overlay";
import HomePage from "./Home";
import "./globals.css";


export default function Home() {
  return (
      <main className="main">
        <HomePage />
        <Overlay />
      </main>
  );
}
