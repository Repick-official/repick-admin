"use client";
import { atom } from "recoil";

export const selectedNavPage = atom<string>({
  key: "대시보드",
  default: "대시보드",
});
