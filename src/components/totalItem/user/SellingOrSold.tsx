"use client";
import { useState, useEffect } from "react";
import {
  RequestPurchaseProps,
  RequestReturnProps,
} from "@/interface/interface";

export default function SellingOrSold(items: any) {
  const [view, setView] = useState<{ [key: number]: boolean }>({});

  const [userItems, setUserItems] = useState<any[]>();

  useEffect(() => {
    // items.clothing.result.content가 존재할 때만 setUserItems 호출
    if (items?.clothing?.result?.content) {
      setUserItems(items.clothing.result.content);
    }
  }, [items]);

  console.log("useritems", userItems);

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

  return (
    <div className="w-1216pxr h-1038pxr  border-1pxr border-solid border-dark-gray bg-white ml-32pxr">
      <div className="mt-28pxr ml-40pxr w-1144pxr">
        <div className="flex">
          <div className="text-16pxr font-medium leading-24pxr">
            전체 {items?.clothing?.result?.totalElements ?? 0}개
          </div>
        </div>
        <div className="bg-circle-gray h-48pxr flex mt-24pxr">
          <div className="text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
            <div className="ml-15pxr w-91pxr">상품 코드</div>
            <div className="w-239pxr">상품명</div>
            <div className="w-69pxr">등급</div>
            <div className="w-149pxr">판매기간</div>
            <div className="w-127pxr">판매금액</div>
            <div className="w-125pxr">정산금</div>
            <div className="w-142pxr">수수료</div>
            <div>상태</div>
          </div>
        </div>

        {userItems?.map((item: any) => (
          <div>
            <div className="h-92pxr flex items-center text-14pxr font-normal leading-21pxr">
              <div className="ml-15pxr w-91pxr">{item.productCode}</div>
              <div className="flex items-center w-239pxr">
                <div className="w-60pxr h-60pxr border-1pxr border-solid border-circle-gray"></div>
                <div className="w-146pxr ml-12pxr">{item.productName}</div>
              </div>
              <div className="w-69pxr">{item.grade}</div>

              <div className="w-149pxr">{item.salesPeriod}</div>

              <div className="w-127pxr">{item.salesPrice}</div>
              <div className="w-125pxr">{item.settlementPrice}</div>
              <div className="w-142pxr">{item.fee}</div>

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
                {/* {view[item.productOrderId] && (
                  <ReturnDropdown item={item} setItems={setItems} />
                )}  */}
              </ul>
            </div>
            <div className="h-1pxr w-full bg-dark-gray"></div>
          </div>
        ))}

        <div className="h-1pxr w-full bg-dark-gray"></div>
      </div>
    </div>
  );
}
