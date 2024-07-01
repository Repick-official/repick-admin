import React from "react";
import DelOrModBtn from "./DelOrModBtn";

export default function DelModal({ onClose }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-nav-color bg-opacity-50">
      <div className="bg-white w-500pxr h-200pxr rounded-10pxr flex flex-col justify-center items-center">
        <div className="text-24pxr font-bold leading-36pxr mb-40pxr">
          이 구매 정보를 삭제하시겠습니까?
        </div>
        <div className="flex">
          <div className="mr-28pxr" onClick={onClose}>
            <DelOrModBtn content="취소하기" />
          </div>
          <div
            onClick={() => {
              // 삭제 로직 추가
              onClose();
            }}
          >
            <DelOrModBtn content="삭제하기" />
          </div>
        </div>
      </div>
    </div>
  );
}
