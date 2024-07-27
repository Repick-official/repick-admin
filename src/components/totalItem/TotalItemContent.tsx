import React from "react";
import UserItemList from "./UserItemList";

export default function TotalItemContent({ clothing }: any) {
  return (
    <div>
      <div className="w-1262pxr h-54pxr bg-circle-gray mt-16pxr text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
        <div className="ml-18pxr w-104pxr">유저 코드</div>
        <div className="w-127pxr">이름</div>
        <div className="w-97pxr">총 수량</div>
        <div className="w-97pxr">판매중</div>
        <div className="w-110pxr">판매 완료</div>
        <div className="w-82pxr">리젝</div>
        <div className="w-110pxr">기한 만료</div>
        <div className="w-517pxr">KG</div>
      </div>

      <div>
        <UserItemList clothing={clothing} />
      </div>
    </div>
  );
}
