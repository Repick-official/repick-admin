"use client";
import { useState, useEffect } from "react";

export default function ReturnDropdown() {
  return (
    <div>
      <div className="absolute" onClick={(e) => e.stopPropagation()}>
        <div className="text-13pxr text-text-sub font-medium leading-19pxr w-171pxr border-1pxr border-solid border-circle-gray rounded-5pxr  bg-white mt-16pxr">
          <li className="w-171pxr h-36pxr pt-8pxr pl-17pxr pb-8pxr">
            반품 접수
          </li>
          <li className="w-171pxr h-36pxr pt-8pxr pl-17pxr pb-8pxr">
            반품 입고 완료
          </li>
          <li className="w-171pxr h-36pxr pt-8pxr pl-17pxr pb-8pxr">
            구매 확정
          </li>
        </div>
      </div>
    </div>
  );
}
