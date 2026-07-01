import Header from "../components/Header";
    // <Header title="Create" subtitle="Task" />

// Create.tsx

import {
  Send,
  Bot,
  Globe,
  CheckCircle2,
  Circle,
  Plus,
} from "lucide-react";
import { useState } from "react";

export default function Create() {
  const [taskType, setTaskType] =
    useState("telegram");

  return (
    <div>
      {/* Task Type */}
      <Header title="Create" subtitle="Task" />
      <div className="pt-20 pb-24 overflow-y-auto h-screen px-3  no-scrollbar ">
        <div className="flex items-start justify-start">
         
        <h2 className="flex items-start justify-start !text-white  text-h2"> 1. Select Task Type</h2>
        </div>

        <div className="space-y-3 mt-1">
          {/* Telegram Channel */}
          <button
            onClick={() =>
              setTaskType("telegram")
            }
            className={`w-full rounded-xl border p-3 flex items-center justify-between transition ${
              taskType === "telegram"
                ? "border-purple-500 bg-[#151025]"
                : "border-slate-800 bg-[#0B1320]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <Send
                  size={22}
                  className="text-white"
                />
              </div>

              <div className="text-left">
                <h3 className="text-white !text-h3">
                  Telegram Channel
                </h3>

                <p className="text-gray-400 text-sm">
                  User join your channel
                </p>
              </div>
            </div>

            {taskType === "telegram" ? (
              <CheckCircle2 className="text-purple-500" />
            ) : (
              <Circle className="text-gray-500" />
            )}
          </button>

          {/* Telegram Bot */}
          <button
            onClick={() =>
              setTaskType("bot")
            }
            className={`w-full rounded-xl border p-3 flex items-center justify-between transition ${
              taskType === "bot"
                ? "border-purple-500 bg-[#151025]"
                : "border-slate-800 bg-[#0B1320]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                <Bot
                  size={22}
                  className="text-white"
                />
              </div>

              <div className="text-left">
                <h3 className="text-white !text-h3">
                  Telegram Bot
                </h3>

                <p className="text-gray-400 text-sm">
                  User join your bot
                </p>
              </div>
            </div>

            {taskType === "bot" ? (
              <CheckCircle2 className="text-purple-500" />
            ) : (
              <Circle className="text-gray-500" />
            )}
          </button>

          {/* Website */}
          <button
            onClick={() =>
              setTaskType("website")
            }
            className={`w-full rounded-xl border p-3 flex items-center justify-between transition ${
              taskType === "website"
                ? "border-purple-500 bg-[#151025]"
                : "border-slate-800 bg-[#0B1320]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Globe
                  size={22}
                  className="text-white"
                />
              </div>

              <div className="text-left">
                <h3 className="text-white !text-h3">
                  Website Visit
                </h3>

                <p className="text-gray-400 text-sm">
                  User visit your website
                </p>
              </div>
            </div>

            {taskType === "website" ? (
              <CheckCircle2 className="text-purple-500" />
            ) : (
              <Circle className="text-gray-500" />
            )}
          </button>
        </div>

         {/* Task Details */}
      <div>
        <div className="flex items-start">
          
        <h2 className="flex items-start justify-start !text-white text-h2 !mb-1 !mt-4 "> 2. Task Details</h2>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#0B1320] p-3 space-y-4">
          <div className="flex flex-col items-start">
            <label className="text-gray-300 text-sm block mb-1">
              Channel Link
            </label>

            <input
              type="text"
              placeholder="https://t.me/yourchannel"
              className="w-full h-12 rounded-xl border border-slate-700 bg-[#111827] px-4 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-gray-300 text-sm block mb-1">
                Reward Per User ($)
              </label>

              <input
                type="number"
                placeholder="$0.001"
                className="w-full h-12 rounded-xl border border-slate-700 bg-[#111827] px-4 text-white"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm block mb-1">
                Maximum Users
              </label>

              <input
                type="number"
                placeholder="500"
                className="w-full h-12 rounded-xl border border-slate-700 bg-[#111827] px-4 text-white"
              />
            </div>
          </div>

          <div className="rounded-xl bg-[#111827] border border-slate-700 p-3 flex justify-between items-center">
            <span className="text-gray-400">
              Total Cost
            </span>

            <span className="text-h1 text-purple-500">
              0.100 USDT
            </span>
          </div>

          <button className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold flex items-center justify-center gap-2">
            <Plus size={20} />
            Create Task
          </button>
        </div>
      </div>




      </div>
    </div>
  );
}