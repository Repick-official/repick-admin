import React, { useState } from "react";
import DelOrModBtn from "./DelOrModBtn";
import { registerTrackingNumber } from "@/api/request";

export default function ModModal({ onClose, item }: any) {
  const [trackingNumber, setTrackingNumber] = useState(item.trackingNumber);

  const handleSave = async () => {
    try {
      await registerTrackingNumber(item.productOrderId.toString());
      onClose();
    } catch (error) {
      console.error("Failed to update tracking number:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-nav-color bg-opacity-50">
      <div
        className="bg-white w-1000pxr h-620pxr rounded-10pxr"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-40pxr mt-40pxr">
          <div className="flex">
            <div className="text-24pxr font-bold leading-36pxr">구매 정보</div>
            <div className="ml-auto " onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M24.9441 8.94313C25.4648 8.42244 25.4648 7.57822 24.9441 7.05752C24.4234 6.53682 23.5792 6.53682 23.0585 7.05752L16.0013 14.1147L8.94411 7.05752C8.42341 6.53682 7.57919 6.53682 7.05849 7.05752C6.53779 7.57822 6.53779 8.42244 7.05849 8.94313L14.1157 16.0003L7.05849 23.0575C6.53779 23.5782 6.53779 24.4224 7.05849 24.9431C7.57919 25.4638 8.42341 25.4638 8.94411 24.9431L16.0013 17.8859L23.0585 24.9431C23.5792 25.4638 24.4234 25.4638 24.9441 24.9431C25.4648 24.4224 25.4648 23.5782 24.9441 23.0575L17.8869 16.0003L24.9441 8.94313Z"
                  fill="#2D3648"
                />
              </svg>
            </div>
          </div>

          <div className="mt-44pxr">
            <div className="text-18pxr font-medium leading-27pxr text-text-sub ">
              <div className="flex items-center">
                <div className="w-81pxr">상품 코드</div>
                <div className="ml-20pxr w-347pxr h-48pxr pt-10pxr pl-16pxr pr-16pxr rounded-8pxr border-1pxr border-solid border-box-color text-18pxr font-medium leading-27pxr text-nav-color">
                  {item.productCode}
                </div>
              </div>
              <div className="flex items-center mt-16pxr">
                <div className="w-81pxr">상품명</div>
                <div className="ml-20pxr w-819pxr h-48pxr pt-10pxr pl-16pxr pr-16pxr rounded-8pxr border-1pxr border-solid border-box-color text-18pxr font-medium leading-27pxr text-nav-color">
                  {item.productName}
                </div>
              </div>
              <div className="flex items-center mt-16pxr">
                <div className="w-81pxr">이름</div>
                <div className="ml-20pxr w-347pxr h-48pxr pt-10pxr pl-16pxr pr-16pxr rounded-8pxr border-1pxr border-solid border-box-color text-18pxr font-medium leading-27pxr text-nav-color">
                  {item.userName}
                </div>
              </div>

              <div className="flex items-center mt-16pxr">
                <div className="w-81pxr">주소</div>
                <div className="ml-20pxr w-819pxr h-48pxr pt-10pxr pl-16pxr pr-16pxr rounded-8pxr border-1pxr border-solid border-box-color text-18pxr font-medium leading-27pxr text-nav-color">
                  {item.userAddress}
                </div>
              </div>
              <div className="flex items-center mt-16pxr">
                <div className="w-81pxr">전화번호</div>
                <div className="ml-20pxr w-347pxr h-48pxr pt-10pxr pl-16pxr pr-16pxr rounded-8pxr border-1pxr border-solid border-box-color text-18pxr font-medium leading-27pxr text-nav-color">
                  {item.userPhoneNumber}
                </div>
              </div>
              <div className="flex items-center mt-16pxr">
                <div className="w-81pxr">운송장번호</div>
                <input
                  className="ml-20pxr w-819pxr h-48pxr pt-10pxr pl-16pxr pr-16pxr rounded-8pxr border-1pxr border-solid border-box-color text-18pxr font-medium leading-27pxr text-nav-color"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex mt-32pxr">
            <div className="flex ml-auto">
              <div className="mr-28pxr" onClick={onClose}>
                <DelOrModBtn content="취소하기" />
              </div>
              <div onClick={handleSave}>
                <DelOrModBtn content="저장하기" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
