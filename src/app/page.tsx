"use client";

import Keyboard from "@/components/Keyboard";
import { MINI_EN, STATIC_KEY_MAP } from "@/utils/constants";
import { KeyHistory } from "@/utils/type";
import { ArrowLeft, ArrowRight, ArrowUp, Space } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const keyMap: Record<string, string | React.ReactNode> = {
  ArrowUp: <ArrowUp />,
  ArrowDown: <ArrowDown />,
  ArrowLeft: <ArrowLeft />,
  ArrowRight: <ArrowRight />,
  ...STATIC_KEY_MAP,
  Space: <Space />,
};

const HISTORY_DISPLAY_TIME = 3000; // 1 second
const MAX_HISTORY_ITEMS = 50; // Maximum number of history items to show

export default function Home() {
  const [activeKey, setActiveKey] = useState<string[]>([]);
  const [keyHistory, setKeyHistory] = useState<KeyHistory[]>([]);

  useEffect(() => {
    if (activeKey.length === 0) {
      setKeyHistory((prev) => {
        const now = Date.now();
        if (
          prev.length > 0 &&
          prev[0].keys.length > 0 &&
          prev[prev.length - 1].keys.length < activeKey.length &&
          JSON.stringify(prev[0].keys) !== JSON.stringify(activeKey) &&
          activeKey.length > 0
        ) {
          return [
            ...prev.slice(0, MAX_HISTORY_ITEMS - 1),
            { keys: prev[0].keys, timestamp: now },
          ];
        }
        return prev;
      });
    }

    const cleanup = setInterval(() => {
      setKeyHistory((prev) =>
        prev.filter(
          (item) => Date.now() - item.timestamp < HISTORY_DISPLAY_TIME
        )
      );
    }, HISTORY_DISPLAY_TIME);

    return () => clearInterval(cleanup);
  }, [activeKey]);

  const handlePress = (keys: string[]) => {
    setActiveKey(keys);
    if (keys.length > 0) {
      setKeyHistory((prev) => [
        { keys, timestamp: Date.now() },
        ...prev.slice(0, MAX_HISTORY_ITEMS - 1),
      ]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-end gap-2 h-40 pb-4">
        <div className="flex flex-col-reverse items-center gap-1 text-white/60">
          {keyHistory.map((item) => (
            <div
              key={item.timestamp}
              className="text-2xl font-bold animate-fadeOut"
              style={{
                opacity: Math.max(
                  0,
                  1 - (Date.now() - item.timestamp) / HISTORY_DISPLAY_TIME
                ),
              }}
            >
              <PressedKeys keys={item.keys} />
            </div>
          ))}
        </div>
        <PressedKeys keys={activeKey} />
      </div>
      <Keyboard layout={MINI_EN} onPress={handlePress} />
    </div>
  );
}

function PressedKeys({ keys }: { keys: string[] }) {
  return (
    <div className="text-2xl font-bold min-h-10 flex items-center gap-1">
      {keys.length > 0 &&
        keys.map((key, index) => (
          <span key={index} className="flex items-center gap-1">
            {keyMap[key as keyof typeof keyMap] ?? key}
            {index < keys.length - 1 && " + "}
          </span>
        ))}
    </div>
  );
}
