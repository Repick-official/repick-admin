"use client";
import { useState, useEffect } from "react";
import { ClothingSalesItemStatus } from "@/interface/interface";
import { productReturn } from "@/api/request";

export default function RejectedProduct({ rejectedItems, onStateChange }: any) {
  const [view, setView] = useState<{ [key: string]: boolean }>({});
  const [userItems, setUserItems] = useState<any[]>([]);

  useEffect(() => {
    if (rejectedItems?.result?.content) {
      setUserItems(rejectedItems?.result.content);
    }
  }, [rejectedItems]);

  console.log("rejectedItems", rejectedItems);

  const handleClickOutside = (event: any) => {
    if (
      Object.values(view).some(Boolean) &&
      !event.target.closest(".dropdown-container")
    ) {
      setView({});
    }
  };

  const toggleDropdown = (id: string) => {
    setView((prevView) => ({
      ...prevView,
      [id]: !prevView[id],
    }));
  };

  // 상태 변경 함수
  const handleStateChange = async (newState: string, productId: number) => {
    try {
      await productReturn(newState, productId);
      setUserItems((prevItems) =>
        prevItems.map((item) =>
          item.productCode === productId ? { ...item, state: newState } : item
        )
      );
      setView((prevView) => ({ ...prevView, [productId]: false })); // 드롭다운 닫기
      if (onStateChange) onStateChange(); // 부모 컴포넌트 업데이트 요청
    } catch (error) {
      console.error("Error updating product state:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [view]);

  return (
    <div className="w-1216pxr h-1038pxr border-1pxr border-solid border-dark-gray bg-white ml-32pxr">
      <div className="mt-28pxr ml-40pxr w-1144pxr">
        <div className="flex justify-between">
          <div className="text-16pxr font-medium leading-24pxr">
            전체 {userItems?.length ?? 0}개
          </div>
          <div className="flex items-center justify-center bg-nav-color text-background-color rounded-10pxr w-120pxr h-36pxr cursor-pointer">
            일괄 반송 완료
          </div>
        </div>
        <div className="bg-circle-gray h-48pxr flex mt-24pxr">
          <div className="text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
            <div className="ml-15pxr w-91pxr">상품 코드</div>
            <div className="w-239pxr">상품명</div>
            <div className="w-100pxr">신청일</div>
            <div className="w-149pxr">상태</div>
          </div>
        </div>

        {userItems?.map((item) => (
          <div key={item.productCode}>
            <div className="h-92pxr flex items-center text-14pxr font-normal leading-21pxr">
              <div className="ml-15pxr w-91pxr">{item.productCode}</div>
              <div className="flex items-center w-239pxr">
                <div className="w-60pxr h-60pxr border-1pxr border-solid border-circle-gray"></div>
              </div>
              <div className="w-100pxr">{item.requestDate}</div>
              <ul
                className="w-134pxr h-36pxr cursor-pointer rounded-8pxr border-1pxr border-solid border-dark-gray dropdown-container"
                onClick={() => toggleDropdown(item.productCode)}
              >
                상태 드롭 다운 추가
                <div className="flex items-center px-8pxr py-8pxr">
                  <div>{item.state || "반송 전"}</div>
                  <div className="ml-auto">
                    {view[item.productCode] ? (
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
                {view[item.productCode] && (
                  <div className="absolute text-13pxr w-134pxr bg-white border border-gray-300 rounded shadow-lg">
                    {["반송 전", "반송 완료"].map((state) => (
                      <div
                        key={state}
                        className={`px-4 py-2 cursor-pointer ${
                          item.state === state ? "font-bold" : ""
                        } hover:bg-gray-100`}
                        onClick={() =>
                          handleStateChange(state, item.productCode)
                        }
                      >
                        {state}
                      </div>
                    ))}
                  </div>
                )}
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
