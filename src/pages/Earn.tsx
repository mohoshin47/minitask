import { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import TaskTabs from '../components/TaskTabs';

import { getuserTasks } from '../services/userService';
import type { Task } from '../types/usertask';

import { useUser } from '../contexts/UserContext';
import TaskCard from '../components/TaskCard';
import ProfileCardProps from '../components/ProfileCardProps';
import DailyRewardCard from '../components/DailyRewardCard';

export default function Earn() {
  const { user, loading } = useUser();

  const [tasks, setTasks] = useState<Task[]>([]);

  const [active, setActive] = useState<'all' | 'social' | 'website' | 'ads'>('all');

  useEffect(() => {
    if (user?.telegramId) {
      loadTasks();
    }
  }, [user]);

  async function loadTasks() {
    try {
      const res = await getuserTasks(user!.telegramId);

      setTasks(res.tasks);
    } catch (err) {
      console.log(err);
    }
  }

  const filteredTasks = useMemo(() => {
    if (active === 'all') return tasks;

    if (active === 'social') {
      return tasks.filter(
        (task) => task.type === 'telegram_channel' || task.type === 'telegram_group' || task.type === 'telegram_bot',
      );
    }

    if (active === 'ads') {
      return tasks.filter((task) => task.type === 'rewarded_popup');
    }

    return tasks;
  }, [tasks, active]);

  // console.log("test: ",filteredTasks)

  if (loading) {
    return <div className="p-4 text-white">Loading...</div>;
  }

  // const [tasksCompleted, setTasksCompleted] = useState(1);

  const handleClaim = () => {
    alert('Reward claimed ✅ $0.002 added to balance!');
  };

  return (
    <div>
      <Header title="Mini" subtitle="Task" />

      <div className="pt-21 pb-24 overflow-y-auto h-screen px-3  no-scrollbar ">
        {/* <User_Profile_Card user={user} /> */}
        <ProfileCardProps user={user} />

        <div className="mt-5">
          {/* <RewardCard /> */}
          <DailyRewardCard tasksCompleted={0} totalTasks={3} rewardAmount={0.002} onClaim={handleClaim} />
        </div>

        <TaskTabs active={active} setActive={setActive} />

        <div className="mt-5 space-y-3">
          {filteredTasks.length === 0 && <div className="text-center text-slate-400 py-10">No Tasks Available</div>}

          {filteredTasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
