import React from "react";
import { TitleType } from "@/interface/interface";

export default function MainTitle({ mainTitleName }: TitleType) {
  return (
    <div className="text-24pxr font-bold leading-36pxr">{mainTitleName}</div>
  );
}
