import { STATIC_KEY_MAP } from "@/utils/constants";
import { KeyboardLayout } from "@/utils/type";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const keyMap: Record<string, string | React.ReactNode> = {
  ArrowUp: <ArrowUp />,
  ArrowDown: <ArrowDown />,
  ArrowLeft: <ArrowLeft />,
  ArrowRight: <ArrowRight />,
  ...STATIC_KEY_MAP,
};

function Key({
  keyName,
  baseWidth,
  active,
}: {
  keyName: string;
  baseWidth: number;
  active: boolean;
}) {
  return (
    <div
      className="p-1 flex justify-stretch items-stretch"
      style={{
        width: `calc(${baseWidth}px * ${keyName.split(":")[1] ?? 1})`,
        height: `${baseWidth}px`,
      }}
    >
      <div
        className="border border-white/10 rounded-md truncate p-2 w-full h-full font-bold text-base flex justify-start items-end transition hover:opacity-80 active:scale-[0.95] active:bg-white/10 cursor-pointer text-white/80"
        style={active ? { backgroundColor: "rgba(255, 255, 255, 0.1)" } : {}}
      >
        {keyMap[keyName.split(":")[0]] || keyName.split(":")[0]}
      </div>
    </div>
  );
}

export default function Keyboard({
  layout,
  base,
  onPress,
}: {
  layout: KeyboardLayout;
  base?: number;
  onPress: (key: string[]) => void;
}) {
  const [activeKey, setActiveKey] = useState<string[]>([]);

  useEffect(() => {
    const keydownCb = (event: KeyboardEvent) => {
      event.preventDefault();
      setActiveKey((prev) =>
        prev.includes(event.code) ? prev : [...prev, event.code]
      );
    };
    const keyupCb = (event: KeyboardEvent) => {
      event.preventDefault();
      setActiveKey((prev) => prev.filter((key) => key !== event.code));
    };

    document.addEventListener("keydown", keydownCb);
    document.addEventListener("keyup", keyupCb);

    onPress(activeKey);

    return () => {
      document.removeEventListener("keydown", keydownCb);
      document.removeEventListener("keyup", keyupCb);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);

  return (
    <div
      className="flex flex-wrap flex-col items-stretch select-none"
      style={{
        width: `calc(${base || layout.base}px * ${layout.width})`,
        height: `calc(${base || layout.base}px * ${layout.height})`,
      }}
    >
      {layout.layout.map((row, index) => (
        <div key={index} className="flex w-full justify-between">
          {row.map((key) => (
            <Key
              key={key}
              keyName={key}
              baseWidth={base || layout.base}
              active={activeKey.includes(key.split(":")[0])}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
