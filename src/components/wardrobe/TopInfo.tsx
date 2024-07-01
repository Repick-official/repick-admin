import React from "react";

export default function TopInfo({ total }: any) {
  return (
    <div className="flex items-center space-x-539pxr mt-39pxr">
      <div className="text-16pxr font-medium leading-24pxr">
        <div>전체 {total}개</div>
      </div>
      <div className="w-91pxr h-36pxr bg-nav-color rounded-10pxr flex items-center justify-center">
        <div className="text-13pxr font-medium leading-19pxr text-white ">
          업데이트
        </div>
      </div>
    </div>
  );
}
