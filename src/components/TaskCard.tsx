import { useEffect, useState } from 'react';
import { Send, PlayCircle } from 'lucide-react';

import type { Task } from '../types/usertask';

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  const [remaining, setRemaining] = useState(task.remainingSeconds || 0);

  useEffect(() => {
    if (task.available) return;

    setRemaining(task.remainingSeconds);

    const timer = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          // চাইলে parent থেকে loadTasks() call করতে পারো
          window.location.reload();

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [task]);

  const formatTime = (sec: number) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;

    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (!task.available) return;
    const url = new URL(task.url);
    // Remove old parameters if an
    url.search = '';
    // Telegram Mini App start parameter
    url.searchParams.set('startapp', `task_${task._id}`);
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.openTelegramLink(url.toString());
    } else {
      window.open(url.toString(), '_blank');
    }
  };

  const getIcon = () => {
    switch (task.type) {
      case 'telegram_bot':
        return <Send className="text-white" size={20} />;

      case 'telegram_channel':
        return <Send className="text-white" size={20} />;

      default:
        return <PlayCircle className="text-white" size={20} />;
    }
  };

  return (
    <div className="flex items-center justify-between bg-[#111827] border border-[#2A3146] rounded-xl p-4">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center">{getIcon()}</div>

        <div className="flex flex-col items-start">
          <h3 className="text-white text-lg font-bold">{task.title}</h3>

          <p className="text-gray-400 text-sm">{task.description}</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="text-violet-400 font-bold">${task.reward.toFixed(3)}</span>

        <button
          onClick={handleStart}
          disabled={!task.available}
          className={`px-5 py-2 rounded-lg font-semibold transition

            ${
              task.available
                ? 'bg-violet-600 hover:bg-violet-700 text-white'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          {task.available ? 'Start' : formatTime(remaining)}
        </button>
      </div>
    </div>
  );
}
