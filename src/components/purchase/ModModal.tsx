import React from "react";
import DelOrModBtn from "./DelOrModBtn";

export default function ModModal({ onClose }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-nav-color bg-opacity-50">
      <div className="bg-white w-1000pxr h-620pxr rounded-10pxr ">
        <div className="mx-40pxr mt-40pxr">
          <div className="text-24pxr font-bold leading-36pxr">구매 정보</div>

          <div className="mt-53pxr">
            <div className="text-18pxr font-medium leading-27pxr text-text-sub ">
              <div>상품 코드</div>
              <div>상품명</div>
              <div>이름</div>
              <div>주소</div>
              <div>전화번호</div>
              <div>운송장번호</div>
            </div>
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
              <DelOrModBtn content="저장하기" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
