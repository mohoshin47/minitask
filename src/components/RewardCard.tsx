import { toast } from "react-hot-toast";

export default function RewardCard() {
const handleClaimReward = () => {
    toast.success("Reward claimed successfully! You've earned $0.002.", {
      duration: 3000,
      position: "top-center",
    });
  };


  return (
   <div className="rounded-3xl border border-[#2e1d51] bg-gradient-to-br from-[#140c3a] to-[#070d1d] p-5">
  <div className="flex items-center justify-between">
    
    {/* Left Side */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
        <span className="text-2xl">🗓️</span>
      </div>

      <div className="flex flex-col items-start">
        <h3 className="text-white text-xl font-bold">
          Daily Reward
        </h3>

        <p className="text-gray-400 text-sm">
          Complete 3 tasks everyday
        </p>

        <p className="text-white text-sm mt-1">
          Reward:
          <span className="text-purple-400 font-semibold">
            {" "} $0.002
          </span>
        </p>
      </div>
    </div>

    {/* Right Side */}
    <div className="text-white text-xl font-medium">
      1 / 3
    </div>
  </div>

  {/* Button */}
  <button className="w-full mt-5 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold"
   onClick={handleClaimReward}>
    Claim Reward
  </button>
</div>
  );
}