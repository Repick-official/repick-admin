"use client";
import PurchaseDropdown from "./PurchaseItem";
import { useState, useEffect } from "react";
import ReturnDropdown from "./ReturnDropdown";
import {
  RequestPurchaseProps,
  RequestReturnProps,
} from "@/interface/interface";

export default function RequestReturn({ returns }: RequestReturnProps) {
  const [view, setView] = useState<{ [key: number]: boolean }>({});
  const [items, setItems] = useState(returns?.result.content);

  const handleClickOutside = (event: any) => {
    if (
      Object.values(view).some(Boolean) &&
      !event.target.closest(".dropdown-container")
    ) {
      setView({});
    }
  };

  const toggleDropdown = (id: number) => {
    setView((prevView) => ({
      ...prevView,
      [id]: !prevView[id],
    }));
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [view]);

  useEffect(() => {
    if (returns) {
      setItems(returns.result.content);
    }
  }, [returns]);

  return (
    <div className="w-1216pxr h-1038pxr rounded-10pxr border-1pxr border-solid border-dark-gray bg-white ml-32pxr">
      <div className="mt-28pxr ml-40pxr w-1144pxr">
        <div className="flex">
          <div className="text-16pxr font-medium leading-24pxr">
            전체 {returns?.result.totalElements}개
          </div>
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

        {items?.map((item) => (
          <div key={item.productOrderId}>
            <div className="h-92pxr flex items-center text-14pxr font-normal leading-21pxr">
              <div className="ml-18pxr w-91pxr">{item.productCode}</div>
              <div className="flex items-center w-255pxr">
                <div className="w-60pxr h-60pxr border-1pxr border-solid border-circle-gray"></div>
                <div className="w-146pxr ml-12pxr">{item.productName}</div>
              </div>
              <div className="w-113pxr">{item.userName}</div>
              <div className="w-291pxr">
                <div className="w-260pxr">{item.userAddress}</div>
              </div>
              <div className="w-154pxr">{item.userPhoneNumber}</div>
              <ul
                className="w-134pxr h-36pxr cursor-pointer rounded-8pxr border-1pxr border-solid border-dark-gray dropdown-container"
                onClick={() => toggleDropdown(item.productOrderId)}
              >
                <div className="flex items-center px-8pxr py-8pxr">
                  <div className="">{item.state}</div>
                  <div className="ml-auto">
                    {view[item.productOrderId] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5.59056 13.0889C5.26512 13.4144 4.73748 13.4144 4.41205 13.0889C4.08661 12.7635 4.08661 12.2359 4.41205 11.9104L9.41205 6.91042C9.73748 6.58498 10.2651 6.58498 10.5906 6.91042L15.5906 11.9104C15.916 12.2359 15.916 12.7635 15.5906 13.0889C15.2651 13.4144 14.7375 13.4144 14.412 13.0889L10.0013 8.67819L5.59056 13.0889Z"
                          fill="#1D2939"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5.59056 6.91107C5.26512 6.58563 4.73748 6.58563 4.41205 6.91107C4.08661 7.23651 4.08661 7.76414 4.41205 8.08958L9.41205 13.0896C9.73748 13.415 10.2651 13.415 10.5906 13.0896L15.5906 8.08958C15.916 7.76414 15.916 7.23651 15.5906 6.91107C15.2651 6.58563 14.7375 6.58563 14.412 6.91107L10.0013 11.3218L5.59056 6.91107Z"
                          fill="#1D2939"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {view[item.productOrderId] && (
                  <ReturnDropdown item={item} setItems={setItems} />
                )}
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
            <div className="h-1pxr w-full bg-dark-gray"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
