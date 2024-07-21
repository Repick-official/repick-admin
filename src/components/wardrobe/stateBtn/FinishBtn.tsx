import React from "react";

export default function FinishBtn({ finish }: any) {
  return (
    <div className="flex items-center">
      <div>{finish ? "Y" : "N"}</div>
      <div
        className={`flex justify-center items-center rounded-8pxr text-12pxr leading-18pxr font-medium text-background-color  ${
          finish
            ? "bg-unSelected-color ml-8pxr w-46pxr h-29pxr"
            : "bg-nav-color  ml-11pxr w-57pxr h-29pxr"
        }`}
      >
        {finish ? "완료" : "미완료"}
      </div>
    </div>
  );
}
