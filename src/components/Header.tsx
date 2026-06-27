import { Bell } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({
  title = "Mini",
  subtitle = "Task",
}: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#081425]">
       <div className="bg-[#081425]/90 w-full h-18 px-4 flex items-center justify-between">
      <h2 className="!text-1xl font-bold !text-white">
        {title} <span className="text-purple-500">{subtitle}</span>
      </h2>

      <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
        <Bell className="w-5 h-5 text-white" />
      </button>
    </div>

    </div>
   
  );
}
