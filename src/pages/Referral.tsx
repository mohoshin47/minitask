import Header from "../components/Header";
import ReferralCard from "../components/ReferralCard";

// Referral.tsx
export default function Referral() {
  return (
    <div>
         <div>
          <Header title="Referral" subtitle="Users" />
          </div>
      
      <div className="p-10"> 
        <ReferralCard />
      </div>


    </div>
  );
}