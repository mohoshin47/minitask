import { Copy, Share2,Users } from "lucide-react";
import { useUser } from "../contexts/UserContext";
import { useGlobalConfig } from "../contexts/GlobalConfigContext";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { getMyReferrals } from "../services/userService";



export default function ReferralCard() {
  const { user } = useUser();
  const { config } = useGlobalConfig();

  const [referrals, setReferrals] =
    useState<any[]>([]);

  useEffect(() => { loadReferrals(); }, []);
  const loadReferrals = async () => {
    try {
      const response =await getMyReferrals(user?.telegramId || 0);

      setReferrals(
        response.data
      );
    } catch (err) {
      console.log(err);
    }
  };

   const getDaysAgo = ( date: string) => {
    const created = new Date(date);
    const now =new Date();
    const diff =
      Math.floor(
        (now.getTime() -
          created.getTime()) /
          (1000 *
            60 *
            60 *
            24)
      );

    return diff === 0
      ? "Joined Today"
      : `Joined ${diff} day${
          diff > 1 ? "s" : ""
        } ago`;
  };

  const referralLink =`https://t.me/${config?.bot_link}?start=${user?.telegramId}`;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    console.log("test copy")
    toast.success("Referral Link Copied!", {
      duration: 2000,
      position: "top-center",
    }); 

  };

   const shareLink = async () => {
    try {
      if (navigator.share) {
        // Web Share API (mobile devices)
        await navigator.share({
          title: 'Join MiniTask with my referral',
          text: 'Earn rewards by joining through my referral link!',
          url: referralLink,
        });
      } else {
        // Fallback for desktop browsers
        const shareUrl = `https://telegram.me/share/url?url=${encodeURIComponent(referralLink)}&text=Join MiniTask with my referral link!`;
        window.open(shareUrl, '_blank');
      }
    } catch (err) {
      console.log('Error sharing:', err);
      // Fallback to copy if sharing fails
      copyLink();
    }
  };


  return (
    <div>
    <div className="bg-gradient-to-br from-[#140c3a] to-[#070d1d] border border-[#2e1d51] rounded-xl p-3 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
          <Users size={28} className="text-white/80" />
        </div>

        <div className="flex flex-col items-start ">
          <h2 className="!text-white text-2xl font-bold">
            Refer Friends
          </h2>

          <p className="text-gray-300 text-sm mt-1">
            Earn more by inviting friends
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-4">
        <div className="text-left">
          <h3 className="text-purple-300 text-2xl font-bold">
            {config?.refer_reward || 0}$
          </h3>

          <p className="text-gray-300 text-sm mt-1">
            Per Referral
          </p>
        </div>

        <div className="text-right">
          <h3 className="text-purple-300 text-2xl font-bold">
            10%
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            Lifetime Commission
          </p>
        </div>
      </div>
      </div>

      {/* refer top end */}

      <div className="rounded-xl border border-slate-800 bg-[#07111F] p-3 mt-5">
      <h3 className="flex text-white text-sm font-medium mb-1">
        Your Referral Link
      </h3>

      <div className="flex items-center gap-2">
        <div className="flex-1 bg-[#0B1728] border border-slate-700 rounded-xl px-4 py-3 text-gray-400 text-sm truncate">
          {referralLink}
        </div>

        <button
          onClick={copyLink}
          className="w-12 h-12 rounded-xl border border-purple-500/30 bg-purple-900/20 flex items-center justify-center hover:bg-purple-800/30"
        >
          <Copy
            size={18}
            className="text-purple-400"
          />
        </button>
      </div>

      <button
        onClick={shareLink}
        className="w-full mt-4 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold flex items-center justify-center gap-2"
      >
        <Share2 size={18} />
        Share Link
      </button>
    </div>

    {/* link share oftion end */}
     <div className=" grid grid-cols-2 gap-4 mt-4">
      
      {/* Total Referrals */}
      <div className="bg-[#07111F] border border-slate-800 rounded-xl p-3 ">
        <p className="text-gray-400 text-sm font-medium">
          Total Referrals
        </p>

        <h2 className="mt-3  !text-2xl font-bold !text-purple-500">
          {user?.referrals || 0}
        </h2>
      </div>

      {/* Referral Income */}
      <div className="bg-[#07111F] border border-slate-800 rounded-xl p-3">
        <p className="text-gray-400 text-sm font-medium">
          Referral Income
        </p>

        <h2 className="mt-3 !text-2xl font-bold !text-purple-500">
          ${user?.totalreferralsincome?.toFixed(3) || "0.000"}
        </h2>
      </div>
    </div>

     {/* refer list start */}

      <div className="rounded-xl border border-slate-800 bg-[#07111F] p-3 mt-4">
       <div className="flex items-center justify-between">
        <h3 className="text-white text-lg font-semibold mb-2">
        Recent Referrals
      </h3>
       </div>

      <div className="space-y-3">
        {referrals.map(
          (item) => (
            <div
              key={item.telegramId}
              className="flex items-center justify-between border-b border-slate-800 pb-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={
                    item.photoUrl ||
                    "https://ui-avatars.com/api/?name=User&background=7c3aed&color=fff"
                  }
                  alt=""
                  className="w-10 h-10 rounded-full"
                />

                <div className="flex flex-col items-start">
                  <h4 className="text-white font-medium">
                    @{item.username ||"user"}
                  </h4>

                  <p className="text-gray-400 text-xs">
                    {getDaysAgo(item.createdAt)}
                  </p>
                </div>
              </div>

              <div className="text-purple-400 font-semibold">
                +${config?.refer_reward || 0}
              </div>
            </div>
          )
        )}

        {referrals.length ===
          0 && (
          <div className="flex flex-col items-center py-8">
            <Users
              size={40}
              className="text-slate-600"
            />

            <p className="text-slate-500 mt-3">
              No referrals yet
            </p>
          </div>
        )}
      </div>
    </div>



    </div>
  );
}