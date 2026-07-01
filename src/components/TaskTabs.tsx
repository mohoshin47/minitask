import { Globe, Megaphone, Send } from 'lucide-react';

interface Props {
  active: 'all' | 'social' | 'website' | 'ads';
  setActive: (tab: 'all' | 'social' | 'website' | 'ads') => void;
}

export default function TaskTabs({ active, setActive }: Props) {
  const tabs = [
    { id: 'all', label: 'All', icon: null },
    { id: 'social', label: 'Social', icon: Send },
    { id: 'website', label: 'Website', icon: Globe },
    { id: 'ads', label: 'Ads', icon: Megaphone },
  ];

  return (
   <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const selected = active === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id as any)}
            className={`flex items-center gap-2  shrink-0 rounded-xl  border px-4  py-1.5 text-xs font-medium transition-all
              ${
                selected
                  ? 'border-purple-500 bg-gradient-to-r from-violet-600 to-purple-500 text-white'
                  : 'border-[#1D2940] bg-[#091322] text-slate-300'
              }`}
          >
            {Icon && <Icon size={14} className="sm:w-4 sm:h-4" />}
            <span className="truncate">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
