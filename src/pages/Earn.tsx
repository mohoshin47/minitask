import Header from "../components/Header";
import RewardCard from "../components/RewardCard";
import TaskCard from "../components/TaskCard";
import User_Profile_Card from "../components/User_Profile_Card";

export default function Earn() {
  return (
    <div className="p-4 pb-24">
      <Header />
       <div className=" p-0">
           <User_Profile_Card />
     </div>
      <div className="mt-5">
        <RewardCard />
      </div>

      <div className="mt-5 space-y-4">
        <TaskCard
          title="Join Telegram Channel"
          reward="$0.001"
        />

        <TaskCard
          title="Join Telegram Bot"
          reward="$0.001"
        />

        <TaskCard
          title="Visit Website"
          reward="$0.001"
        />

        <TaskCard
          title="Watch Ads"
          reward="$0.001"
        />
      </div>
    </div>
  );
}