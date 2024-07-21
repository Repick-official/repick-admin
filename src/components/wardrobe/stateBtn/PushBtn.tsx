import React from "react";

export default function PushBtn({ push }: any) {
  return (
    <div className="flex items-center">
      <div>{push ? "Y" : "N"}</div>
      <div
        className={`flex justify-center items-center rounded-8pxr w-70pxr h-29pxr ml-11pxr text-12pxr leading-18pxr font-medium  ${
          push
            ? "bg-dark-gray text-unSelected-color"
            : "bg-nav-color text-background-color"
        }`}
      >
        푸시 알림
      </div>
    </div>
  );
}
