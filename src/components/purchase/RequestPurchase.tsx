"use client";
import Dropdown from "./PurchaseDropdown";
import { useState, useEffect } from "react";
import { getRequestPurchase, registerTrackingNumber } from "@/api/request";

export default function RequestPurchase() {
  const [view, setView] = useState(false);
  const [totalElements, setTotalElements] = useState(0);
  const [orders, setOrders] = useState([]);

  const handleClickOutside = (event: any) => {
    if (view && !event.target.closest(".dropdown-container")) {
      setView(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [view]);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await getRequestPurchase("0", "4");
      setTotalElements(response.result.totalElements);
      setOrders(response.result.content);
      console.log(response.result.content);
      console.log(response);
    };
    fetchItem();
  }, []);

  return (
    <div className="w-1216pxr h-1038pxr rounded-10pxr border-1pxr border-solid border-dark-gray bg-white ml-32pxr">
      <div className="mt-28pxr ml-40pxr w-1144pxr">
        <div className="text-16pxr font-medium leading-24pxr">
          전체 {totalElements}개
        </div>
        <div className="bg-circle-gray h-48pxr flex mt-24pxr">
          <div className="text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
            <div className="ml-18pxr w-91pxr">상품 코드</div>
            <div className="w-255pxr">상품명</div>
            <div className="w-113pxr">이름</div>
            <div className="w-291pxr">주소</div>
            <div className="w-154pxr">전화번호</div>
            <div>상태</div>
          </div>
        </div>

        <div className="h-92pxr flex items-center text-14pxr font-normal leading-21pxr">
          <div className="ml-18pxr w-91pxr ">17-1-1</div>

          <div className="flex items-center w-255pxr">
            <div className="w-60pxr h-60pxr border-1pxr border-solid border-circle-gray"></div>
            <div className="w-146pxr ml-12pxr">
              샤넬 빈티지 남방 자켓 (두줄일 경우)
            </div>
          </div>

          <div className="w-113pxr">홍길동</div>

          <div className="w-291pxr">
            <div className="w-260pxr">
              서울특별시 마포구 와우산로 94 서울특별시 마포구 와우산로 94
              (두줄일 경우)
            </div>
          </div>

          <div className="w-154pxr">010-1234-5678</div>

          <ul
            className="cursor-pointer rounded-8pxr border-1pxr border-solid border-black py-8pxr px-12pxr dropdown-container"
            onClick={() => setView(!view)}
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z"
                  fill="#1D2939"
                />
              </svg>
              <div className="ml-8pxr">운송장 번호 추가</div>
            </div>
            {view && <Dropdown />}
          </ul>

          <div className="flex ml-auto mr-26pxr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10Z"
                fill="#727B88"
              />
              <path
                d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
                fill="#727B88"
              />
              <path
                d="M17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                fill="#727B88"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
