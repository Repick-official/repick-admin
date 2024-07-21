import React from "react";
import PushBtn from "./stateBtn/PushBtn";
import FinishBtn from "./stateBtn/FinishBtn";

export default function UserList() {
  const push = true;
  const rejectFinish = true;
  const sellFinish = false;
  return (
    <div>
      <div className="w-1262pxr h-53pxr text-14pxr font-medium leading-21pxr text-text-sub flex items-center">
        <div className="ml-18pxr w-79pxr">1-3</div>
        <div className="w-86pxr">이도현</div>
        <div className="w-99pxr">박스</div>
        <div className="w-133pxr mr-32pxr flex">
          박스 신청
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-auto"
          >
            <path
              d="M6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289Z"
              fill="#2D3648"
            />
          </svg>
        </div>
        <div className="w-83pxr">6/26/24</div>
        <div className="w-116pxr">
          <PushBtn push={push} />
        </div>
        <div className="w-111pxr">7/2/24</div>
        <div className="w-136pxr">7/9/24~10/9/24</div>
        <div className="w-87pxr">10/10/24</div>
        <div className="w-86pxr">10/10/24</div>
        <div className="w-99pxr">
          <FinishBtn finish={rejectFinish} />
        </div>
        <div className="w-79pxr">
          <FinishBtn finish={sellFinish} />
        </div>
      </div>

      <div className="w-1262pxr bg-dark-gray h-1pxr"></div>
    </div>
  );
}
