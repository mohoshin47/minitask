interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title="Mini", subtitle="Task" }: HeaderProps) {
  return (
    <div>
      <div className="bg-[#081425]/90 w-full p-1" >
      <h1 className="text-4xl font-bold !text-white">
        {title} <span className="text-purple-500">{subtitle}</span>
      </h1>

    </div>
    <div className="bg-white/10 h-1 w-full" >

    </div>
    </div>
  );
}