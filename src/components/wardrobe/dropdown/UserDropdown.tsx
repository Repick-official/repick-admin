import React from "react";

export default function UserDropdown() {
  const stateList = [
    "리픽백 배송",
    "수거 중",
    "수거 완료(푸시)",
    "촬영 중",
    "촬영 완료",
    "상품화 중",
    "상품화 완료",
    "상품 등록 완료",
    "요청 취소",
    "판매 중",
    "판매 기간 만료",
  ];
  return (
    <div>
      <div className="absolute" onClick={(e) => e.stopPropagation()}>
        <div className="text-12pxr text-nav-btn font-medium leading-19pxr w-148pxr h-402pxr rounded-10pxr border-1pxr border-solid border-dark-gray bg-white mt-14pxr">
          {stateList.map((state) => (
            <li className="w-148pxr h-36pxr hover:bg-circle-gray pt-8pxr pl-17pxr pb-8pxr">
              {state}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
