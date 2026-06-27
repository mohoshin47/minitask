import Header from "../components/Header";
import { Copy } from "lucide-react";
import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { applyPromo } from "../services/userService";
import toast from "react-hot-toast";

// Profile.tsx
export default function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const copyUserId = () => {
    navigator.clipboard.writeText(user?.telegramId || "123456789");
    toast.success("User ID Copied!", {
      duration: 2000,
      position: "top-center",
    });
  };

  const [promoCode, setPromoCode] = useState("");


  const applyPromo2 =async () => {
      
     if (!promoCode.trim()) {
       toast.error("Please enter a promo code", {
         duration: 2000,
         position: "top-center",
       });
       return;
      }

      try {setLoading(true);
        const result = await applyPromo(
            user?.telegramId || 0, // Replace with the actual telegramId
            promoCode
          );
  
        toast.success(result.message, {
          duration: 2000,
          position: "top-center",
        });
        setUser({
          ...user,
         balance: result.balance,
        }); 

      } catch (error: any) {
        toast.error(
          error?.response?.data
            ?.message ||
            "Something went wrong", {
              duration: 2000,
              position: "top-center",
            }
        );
     
      } finally {
        setLoading(false);
      }
    };

  return (
    <div>
          <Header title="Profile" subtitle="User" />
      <div className="pt-21 pb-24 overflow-y-auto h-screen px-3  no-scrollbar ">
         <div className="rounded-xl border border-slate-800 bg-[#07111F] p-3">
      
      {/* Profile */}
      <div className="flex items-center gap-3">
        <img
          src={"astronaut.png"}
          alt="Profile"
          className="w-14 h-14 rounded-full"
        />

        <div className=" flex flex-col items-start ">
          <h2 className="!text-white  font-semibold">
            {user?.Name || "Mini Task User"}
          </h2>

          <p className="text-gray-400 text-sm">
            @{user?.username || "@nkazi01"}
          </p>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-gray-400 text-sm">
              User ID: {user?.telegramId || "123456789"}
            </span>

            <button onClick={copyUserId}>
              <Copy
                size={14}
                className="text-gray-400"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        
        <div className="border border-slate-800 rounded-xl p-3">
          <p className="text-gray-400 text-sm">
            Tasks Completed
          </p>

          <h2 className="!text-white !text-2xl font-semibold mt-2">
            {user?.totaltaskscompleted || 0}
          </h2>
        </div>

        <div className="border border-slate-800 rounded-xl p-3">
          <p className="text-gray-400 text-sm">
            Total Earned
          </p>

          <h2 className="!text-white !text-2xl font-semibold mt-2">
           ${user?.balance?.toFixed(3) || "0.000"}
          </h2>
        </div>

        <div className="border border-slate-800 rounded-xl p-3">
          <p className="text-gray-400 text-sm">
            Referral Count
          </p>

          <h2 className="!text-white !text-2xl font-semibold mt-2">
            {user?.referrals || 0}
          </h2>
        </div>

        <div className="border border-slate-800 rounded-xl p-3">
          <p className="text-gray-400 text-sm">
            Referral Status
          </p>

          <h2 className="!text-lime-400 !text-2xl font-semibold mt-2">
            {user?.accountStatus || "inactive"}
          </h2>
        </div>

      </div>
    </div>

     {/* user details end */}
      <div className="flex flex-col items-start mt-4">
  <h3 className="mb-2 text-lg font-medium text-white">
    Promo Code
  </h3>

  <div className="flex w-full items-center gap-2">
    <input
      type="text"
      placeholder="Enter promo code"
      value={promoCode}
      onChange={(e) => setPromoCode(e.target.value)}
      className="min-w-0 flex-1 h-12 rounded-xl border border-slate-800 bg-[#07111F] px-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-purple-500"
    />

    <button
      onClick={applyPromo2}
      disabled={loading}
      className="h-12 w-20 shrink-0 rounded-xl border border-purple-600 bg-gradient-to-r from-[#2B1457] to-[#3E1B7A] text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50"
    >
      Apply
    </button>
  </div>
</div>

        
      </div>
    </div>
  );
}