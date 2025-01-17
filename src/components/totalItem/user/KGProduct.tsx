"use client";
import { useState, useEffect } from "react";
import {
  getClothingSalesDetails,
  updateKgSell,
  updateProductReturn,
} from "@/api/request";

export default function KGProduct({
  items,
  clothingSalesId,
  handlePageChange,
  page,
  size,
}: any) {
  const [view, setView] = useState<{ [key: string]: boolean }>({});
  const [userItems, setUserItems] = useState<any[]>(items?.result?.content);
  const [inputKg, setInputKg] = useState("");
  const [inputPoint, setInputPoint] = useState("");

  const [isExpired, setIsExpired] = useState(true);
  const [arrow, setArrow] = useState(false);

  const [reloadTrigger, setReloadTrigger] = useState(false); // 데이터 재로드 트리거

  // 데이터 가져오기 함수
  const fetchItems = async () => {
    const updatedReturns = await getClothingSalesDetails(
      clothingSalesId,
      "kg-sell",
      String(page),
      String(size) + `&isExpired=${isExpired}`
    );
    setUserItems(updatedReturns.result.content);
  };
  console.log("kkkkkkkk", userItems, clothingSalesId);

  const handleSave = async () => {
    if (!inputKg || !inputPoint) {
      alert("kg와 포인트를 입력해주세요.");
      return;
    }
    try {
      const response = await updateKgSell(clothingSalesId, inputKg, inputPoint);

      if (response) {
        alert("성공적으로 저장되었습니다.");
        setReloadTrigger((prev) => !prev); // 데이터 리로드 트리거
        setInputKg("");
        setInputPoint("");
      }
    } catch (error) {
      console.error("Error updating KG Sell:", error);
      alert("저장 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  // 페이지나 트리거가 변경될 때 데이터를 다시 가져오기
  useEffect(() => {
    fetchItems();
  }, [page, reloadTrigger, isExpired]);

  const handleClickOutside = (event: any) => {
    if (
      Object.values(view).some(Boolean) &&
      !event.target.closest(".dropdown-container")
    ) {
      setView({});
    }
  };

  const handleDropdownClick = (value: boolean) => {
    setIsExpired(value);
    setArrow(false); // 드롭다운 닫기
    setReloadTrigger((prev) => !prev); // 데이터 리로드 트리거
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
        <div>
          <div className="flex text-14pxr font-medium items-center">
            <div className="text-unSelected-color">총 KG</div>
            <input
              className="border-1pxr border-solid border-box-color w-161pxr h-36pxr rounded-8pxr ml-16pxr pl-13pxr"
              value={inputKg}
              onChange={(e) => setInputKg(e.target.value)}
            />
            <div className="text-unSelected-color ml-28pxr">적립 포인트</div>
            <input
              className="border-1pxr border-solid border-box-color w-161pxr h-36pxr rounded-8pxr ml-16pxr pl-13pxr"
              value={inputPoint}
              onChange={(e) => setInputPoint(e.target.value)}
            />
            <div
              className="flex items-center justify-center bg-nav-color text-background-color rounded-10pxr w-68pxr h-36pxr cursor-pointer ml-16pxr"
              onClick={handleSave}
            >
              저장
            </div>
          </div>
          <div
            className="relative w-134pxr h-36pxr cursor-pointer rounded-8pxr border-1pxr border-solid border-dark-gray text-13pxr flex items-center pl-12pxr pr-12pxr ml-auto justify-between"
            onClick={() => setArrow(!arrow)}
          >
            {isExpired ? "만료 상품" : "리젝 상품"}
            {arrow ? (
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
            {arrow && (
              <div className="absolute top-36pxr left-0 w-134pxr bg-white border-1pxr border-solid border-dark-gray rounded-8pxr shadow-lg z-10 mt-14pxr">
                <div
                  className="px-12pxr py-8pxr hover:bg-circle-gray cursor-pointer"
                  onClick={() => handleDropdownClick(true)} // 만료 상품 선택
                >
                  만료 상품
                </div>
                <div
                  className="px-12pxr py-8pxr hover:bg-circle-gray cursor-pointer"
                  onClick={() => handleDropdownClick(false)} // 리젝 상품 선택
                >
                  리젝 상품
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="text-16pxr font-medium leading-24pxr">
            전체 {userItems?.length ?? 0}개
          </div>
        </div>
        <div className="bg-circle-gray h-48pxr flex mt-24pxr">
          <div className="text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
            <div className="ml-15pxr w-91pxr">상품 코드</div>
            <div className="w-239pxr">상품명</div>
            <div className="w-69pxr">등급</div>
            <div className="w-149pxr">신청일</div>
            <div className="w-127pxr">경로</div>
            <div className="w-125pxr">정산상태</div>
          </div>
        </div>

        {userItems?.map((item) => (
          <div key={item.productCode}>
            <div className="h-92pxr flex items-center text-14pxr font-normal leading-21pxr">
              <div className="ml-15pxr w-91pxr">{item.productCode}</div>
              <div className="flex items-center w-239pxr">
                <div className="w-60pxr h-60pxr border-1pxr border-solid border-circle-gray"></div>
                <div className="w-146pxr ml-12pxr">{item.productName}</div>
              </div>
              <div className="w-69pxr">{item.grade}</div>
              <div className="w-149pxr">{item.requestDate}</div>
              <div className="w-127pxr">
                {item.isExpired ? "기한 만료" : "리젝"}
              </div>
              <div className="w-125pxr">{item.settlementStatus}</div>
            </div>
            <div className="h-1pxr w-full bg-dark-gray"></div>
          </div>
        ))}
        <div className="h-1pxr w-full bg-dark-gray"></div>

        {/* 페이지네이션 버튼 */}
        <div className="pagination mt-16pxr flex justify-center space-x-2">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 0}
            className="px-4 py-2 border rounded"
          >
            이전
          </button>

          {[...Array(items?.result.totalPages || 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`px-3 py-1 border rounded ${
                index === page ? "bg-gray-300" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={items && page + 1 >= items.result.totalPages}
            className="px-4 py-2 border rounded"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
