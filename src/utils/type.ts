export type KeyboardLayout = {
  base: number;
  width: number;
  height: number;
  layout: string[][];
};

export interface KeyHistory {
  keys: string[];
  timestamp: number;
}
