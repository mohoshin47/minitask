import { Coins } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-[#081425]/90 backdrop-blur-md border border-slate-700/40 rounded-3xl p-5 shadow-xl">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-16 h-16 rounded-full border-2 border-slate-500"
          />

          <div>
            <h2 className="!text-white text-2xl font-semibold">
              N Kazi
            </h2>

            <p className="text-slate-400 text-sm">
              @nkazi01
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-slate-300 text-sm">
              Balance
            </p>

            <h3 className="text-white text-3xl font-bold">
              $0.0250
            </h3>
          </div>

          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 flex items-center justify-center">
            <Coins
              size={20}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}