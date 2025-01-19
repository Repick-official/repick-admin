"use client";
import {
  updateOrderState,
  getRequestReturn,
  updateProductReturn,
  updateProductState,
} from "@/api/request";
import { useState, useEffect } from "react";

export default function SellingDropdown({
  item,
  setItems,
  page,
  size,
  onStateChange,
}: any) {
  const [currentState, setCurrentState] = useState("판매중");
  console.log(item.productId);

  const handleStateChange = async (newState: string) => {
    try {
      await updateProductState(newState, String(item.productId));
      setCurrentState(newState);
      console.log("업데이트");
      if (onStateChange) {
        onStateChange();
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div>
      <div className="absolute" onClick={(e) => e.stopPropagation()}>
        <div className="text-13pxr text-text-sub font-medium leading-19pxr w-171pxr border-1pxr border-solid border-circle-gray rounded-5pxr  bg-white mt-6pxr">
          {["판매중", "판매완료", "리젝됨", "판매종료"].map((state) => (
            <li
              key={state}
              className={`w-171pxr h-36pxr pt-8pxr pl-17pxr pb-8pxr hover:bg-circle-gray ${
                currentState === state ? "font-bold" : ""
              }`}
              onClick={() => handleStateChange(state)}
            >
              {state}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
