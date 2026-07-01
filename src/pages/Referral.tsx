import Header from "../components/Header";
import ReferralCard from "../components/ReferralCard";

// Referral.tsx
export default function Referral() {
  return (
    <div>
         <div>
          <Header title="Referral" subtitle="Users" />
          </div>
      
      <div className="pt-20 pb-24 overflow-y-auto h-screen px-3  no-scrollbar ">
        
        <ReferralCard />
        

      </div>


    </div>
  );
}