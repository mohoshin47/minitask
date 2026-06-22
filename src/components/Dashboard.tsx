import { Wallet, Eye } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F3F8F5] p-6">
      {/* Welcome Card */}
      <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, Nl Kajo!
        </h1>

        <p className="mt-3 text-gray-400 text-lg">
          A new day brings new opportunities to grow your earnings.
        </p>

        <button className="mt-6 bg-[#2E8B57] text-white px-8 py-3 rounded-full font-semibold">
          🌲 Start Growing
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-5 mt-8">
        <div className="bg-white rounded-3xl border p-8 text-center shadow-sm">
          <Wallet className="mx-auto text-[#2E8B57]" size={40} />

          <p className="mt-4 text-gray-400">
            Total Earnings
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-gray-600">
            BDT 0.00
          </h2>
        </div>

        <div className="bg-white rounded-3xl border p-8 text-center shadow-sm">
          <Eye className="mx-auto text-[#2E8B57]" size={40} />

          <p className="mt-4 text-gray-400">
            Ads Watched
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-gray-600">
            0
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;