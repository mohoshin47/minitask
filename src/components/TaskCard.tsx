interface Props {
  title: string;
  reward: string;
}

export default function TaskCard({
  title,
  reward,
}: Props) {
  return (
    <div className="bg-[#09111F] border border-gray-800 rounded-2xl p-4 flex justify-between items-center">
      <div>
        <h3>{title}</h3>

        <p className="text-gray-400 text-sm">
          Complete task and earn reward
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <span className="text-purple-500">
          {reward}
        </span>

        <button className="bg-purple-600 px-5 py-2 rounded-lg">
          Start
        </button>
      </div>
    </div>
  );
}