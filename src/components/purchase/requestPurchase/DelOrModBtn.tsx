import React from "react";
import classNames from "classnames";

export default function DelOrModBtn({ content }: any) {
  return (
    <div
      className={classNames(
        "w-192pxr h-56pxr py-13pxr px-59pxr text-18pxr font-medium leading-27pxr rounded-10pxr flex justify-center items-center",
        {
          "bg-dark-gray text-text-sub": content === "취소하기",
          "bg-nav-btn text-background-color": content !== "취소하기",
        }
      )}
    >
      <div>{content}</div>
    </div>
  );
}
