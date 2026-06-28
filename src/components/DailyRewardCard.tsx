import React from 'react';

interface DailyRewardProps {
  tasksCompleted: number;
  totalTasks: number;
  rewardAmount: number;
  loading: boolean;
  onClaim: () => void;
}

const DailyRewardCard: React.FC<DailyRewardProps> = ({
  tasksCompleted,
  totalTasks,
  rewardAmount,
  loading,
  onClaim,
}) => {
  const canClaim = tasksCompleted >= totalTasks && totalTasks > 0 && !loading;
  return (
    <div className="bg-gradient-to-br from-[#140c3a] to-[#070d1d] text-white rounded-lg p-4 shadow-lg w-full mx-auto border border-[#2e1d51]">
      {/* Header */}
      <div className="flex items-center justify-between">
        {/* Left side: Icon + Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
            <span className="text-2xl">🗓️</span>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold !text-white">Daily Reward</h2>
            <p className="text-gray-400 text-sm">Complete {totalTasks} tasks everyday</p>
            <div className="flex items-center gap-2">
              <span className="text-gray-300">Reward:</span>
              <span className="text-purple-400 font-bold">${rewardAmount.toFixed(3)}</span>
            </div>
          </div>
        </div>

        {/* Right side: Progress */}
        <div className="text-purple-400 text-lg font-semibold">
          {tasksCompleted} / {totalTasks}
        </div>
      </div>

      {/* Claim Button */}
      <button
        onClick={onClaim}
        disabled={!canClaim}
        className={`w-full mt-6 py-3 rounded-lg font-semibold transition ${
          canClaim
            ? 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white'
            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
        }`}
      >
        {loading ? 'Claiming...' : canClaim ? 'Claim Reward' : 'Complete More Tasks'}
      </button>
    </div>
  );
};

export default DailyRewardCard;
