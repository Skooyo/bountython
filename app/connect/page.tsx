import ConnectCard from "@/components/ConnectCard";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex w-screen h-screen items-center justify-center flex-col">
      <Navbar />
      <ConnectCard />
    </div>
  );
}