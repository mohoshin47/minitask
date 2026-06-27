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
      <div className="p-4">
        <div className="flex items-start justify-start">
          <h2 className="!text-white font-semibold text-lg">
          1. Select Task Type
        </h2>
        </div>

        <div className="space-y-3">
          {/* Telegram Channel */}
          <button
            onClick={() =>
              setTaskType("telegram")
            }
            className={`w-full rounded-2xl border p-4 flex items-center justify-between transition ${
              taskType === "telegram"
                ? "border-purple-500 bg-[#151025]"
                : "border-slate-800 bg-[#0B1320]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <Send
                  size={22}
                  className="text-white"
                />
              </div>

              <div className="text-left">
                <h3 className="text-white font-semibold">
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
            className={`w-full rounded-2xl border p-4 flex items-center justify-between transition ${
              taskType === "bot"
                ? "border-purple-500 bg-[#151025]"
                : "border-slate-800 bg-[#0B1320]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
                <Bot
                  size={22}
                  className="text-white"
                />
              </div>

              <div className="text-left">
                <h3 className="text-white font-semibold">
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
            className={`w-full rounded-2xl border p-4 flex items-center justify-between transition ${
              taskType === "website"
                ? "border-purple-500 bg-[#151025]"
                : "border-slate-800 bg-[#0B1320]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <Globe
                  size={22}
                  className="text-white"
                />
              </div>

              <div className="text-left">
                <h3 className="text-white font-semibold">
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
      </div>

      {/* Task Details */}
      <div className="p-4">
        <div className="flex items-start">
          <h2 className="!text-white font-semibold text-lg mb-3">
          2. Task Details
        </h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#0B1320] p-4 space-y-4">
          <div>
            <label className="text-gray-300 text-sm block mb-2">
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
              <label className="text-gray-300 text-sm block mb-2">
                Reward Per User (USDT)
              </label>

              <input
                type="number"
                placeholder="0.001"
                className="w-full h-12 rounded-xl border border-slate-700 bg-[#111827] px-4 text-white"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm block mb-2">
                Maximum Users
              </label>

              <input
                type="number"
                placeholder="100"
                className="w-full h-12 rounded-xl border border-slate-700 bg-[#111827] px-4 text-white"
              />
            </div>
          </div>

          <div className="rounded-xl bg-[#111827] border border-slate-700 p-4 flex justify-between items-center">
            <span className="text-gray-400">
              Total Cost
            </span>

            <span className="text-2xl font-bold text-purple-500">
              0.100 USDT
            </span>
          </div>

          <button className="w-full h-14 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold flex items-center justify-center gap-2">
            <Plus size={20} />
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}