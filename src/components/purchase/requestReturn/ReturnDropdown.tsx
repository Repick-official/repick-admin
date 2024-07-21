"use client";
import { updateOrderState } from "@/api/request";
import { useState, useEffect } from "react";

export default function ReturnDropdown({ item, setItems }: any) {
  const [currentState, setCurrentState] = useState(item.state);

  const handleStateChange = async (newState: string) => {
    try {
      await updateOrderState(item.productOrderId, newState);
      setCurrentState(newState);
      setItems((prevItems: any) =>
        prevItems.map((it: any) =>
          it.productOrderId === item.productOrderId
            ? { ...it, state: newState }
            : it
        )
      );
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <div>
      <div className="absolute" onClick={(e) => e.stopPropagation()}>
        <div className="text-13pxr text-text-sub font-medium leading-19pxr w-171pxr border-1pxr border-solid border-circle-gray rounded-5pxr  bg-white mt-6pxr">
          {["반품 접수", "반품 입고 완료", "환불 완료"].map((state) => (
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
