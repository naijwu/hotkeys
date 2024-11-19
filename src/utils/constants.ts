import { KeyboardLayout } from "./type";

export const STATIC_KEY_MAP = {
  ShiftLeft: "shift",
  ShiftRight: "shift",
  ControlLeft: "ctrl",
  ControlRight: "ctrl",
  MetaLeft: "cmd",
  MetaRight: "cmd",
  AltLeft: "alt",
  AltRight: "alt",
  Fn: "fn",
  Escape: "esc",
  PageUp: "pg up",
  PageDown: "pg dn",
  Semicolon: ";",
  Quote: '"',
  Comma: ",",
  Period: ".",
  Slash: "/",
  Delete: "del",
  Backquote: "`",
  BracketLeft: "[",
  BracketRight: "]",
  Backslash: "\\",
  Minus: "-",
  Backspace: "back",
  Equal: "=",
  Space: " ",
  KeyA: "a",
  KeyB: "b",
  KeyC: "c",
  KeyD: "d",
  KeyE: "e",
  KeyF: "f",
  KeyG: "g",
  KeyH: "h",
  KeyI: "i",
  KeyJ: "j",
  KeyK: "k",
  KeyL: "l",
  KeyM: "m",
  KeyN: "n",
  KeyO: "o",
  KeyP: "p",
  KeyQ: "q",
  KeyR: "r",
  KeyS: "s",
  KeyT: "t",
  KeyU: "u",
  KeyV: "v",
  KeyW: "w",
  KeyX: "x",
  KeyY: "y",
  KeyZ: "z",
  Digit0: "0",
  Digit1: "1",
  Digit2: "2",
  Digit3: "3",
  Digit4: "4",
  Digit5: "5",
  Digit6: "6",
  Digit7: "7",
  Digit8: "8",
  Digit9: "9",
};

const MINI_EN_1 = [
  "Escape",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "MediaTrackPrevious",
  "MediaTrackNext",
  "Delete",
];
const MINI_EN_2 = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace:2",
  "Home",
];
const MINI_EN_3 = [
  "Tab:1.5",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Backslash:1.5",
  "End",
];
const MINI_EN_4 = [
  "CapsLock:1.8",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "Enter:2.2",
  "PageUp",
];
const MINI_EN_5 = [
  "ShiftLeft:2.2",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
  "ShiftRight:1.8",
  "ArrowUp",
  "PageDown",
];
const MINI_EN_6 = [
  "ControlLeft:1.15",
  "MetaLeft:1.15",
  "AltLeft:1.15",
  "Space:6.55",
  "AltRight",
  "Fn",
  "ControlRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
];

export const MINI_EN: KeyboardLayout = {
  base: 80,
  width: 16,
  height: 6,
  layout: [MINI_EN_1, MINI_EN_2, MINI_EN_3, MINI_EN_4, MINI_EN_5, MINI_EN_6],
};