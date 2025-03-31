import DashboardCard from "@/components/DashboardCard";

export default function Home() {
  return (
    <div className="flex w-full min-h-[calc(100vh-81px)] items-center justify-center flex-col">
      <div className="flex w-[95%] bg-blue-500 items-center justify-center">
        <DashboardCard />
      </div>
    </div>
  );
}